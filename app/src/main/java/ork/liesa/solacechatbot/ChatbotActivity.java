package ork.liesa.solacechatbot;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class ChatbotActivity extends AppCompatActivity {

    // creating variables for our
    // widgets in xml file.
    private RecyclerView chatsRV;
    private ImageButton sendMsgIB;
    private EditText userMsgEdt;
    private final String USER_KEY = "user";
    private final String BOT_KEY = "bot";

    // creating a variable for
    // our volley request queue.
    private RequestQueue RequestQueue;

    // creating a variable for array list and adapter class.
    private ArrayList<MsgModal> chatModalArrayList;
    private ChatbotRVAdapter chatsRVAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chatbot);

        // on below line we are initializing all our views.
        chatsRV = findViewById(R.id.idRVChats);
        sendMsgIB = findViewById(R.id.idIBSend);
        userMsgEdt = findViewById(R.id.idEdtMessage);

        // below line is to initialize our request queue.
        RequestQueue = Volley.newRequestQueue(ChatbotActivity.this);
        RequestQueue.getCache().clear();

        // creating a new array list
        chatModalArrayList = new ArrayList<>();

        // adding on click listener for send message button.
        sendMsgIB.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // checking if the message entered
                // by user is empty or not.
                if (userMsgEdt.getText().toString().isEmpty()) {
                    // if the edit text is empty display a toast message.
                    Toast.makeText(ChatbotActivity.this, "Please enter your message..", Toast.LENGTH_SHORT).show();
                    return;
                }

                // calling a method to send message
                // to our bot to get response.
                sendMessage(userMsgEdt.getText().toString());

                // below line we are setting text in our edit text as empty
                userMsgEdt.setText("");
            }
        });

        // on below line we are initialing our adapter class and passing our array list to it.
        chatsRVAdapter = new ChatbotRVAdapter(chatModalArrayList, this);

        // below line we are creating a variable for our linear layout manager.
        LinearLayoutManager linearLayoutManager = new LinearLayoutManager(ChatbotActivity.this, RecyclerView.VERTICAL, false);

        // below line is to set layout
        // manager to our recycler view.
        chatsRV.setLayoutManager(linearLayoutManager);

        // below line we are setting
        // adapter to our recycler view.
        chatsRV.setAdapter(chatsRVAdapter);
    }

    private void sendMessage(String userMsg) {
        // below line is to pass message to our
        // array list which is entered by the user.
        chatModalArrayList.add(new MsgModal(userMsg, USER_KEY));
        chatsRVAdapter.notifyDataSetChanged();

//        http://api.brainshop.ai/get?bid=169801&key=gOpx38XQRwRCt8F4&uid=[uid]&msg=[msg]

        // url for our brain
        // make sure to add mshape for uid.
        // make sure to add your url.
        String url = "http://api.brainshop.ai/get?bid=169801&key=gOpx38XQRwRCt8F4&uid=[uid]&msg=" + userMsg;

        // creating a variable for our request queue.
        RequestQueue queue = Volley.newRequestQueue(ChatbotActivity.this);

        // on below line we are making a json object request for a get request and passing our url .
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.GET, url, null, new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                Log.d("Hey",response.toString());

                try {
                    // in on response method we are extracting data
                    // from json response and adding this response to our array list.
                    String botResponse = response.getString("cnt");
                    chatModalArrayList.add(new MsgModal(botResponse, BOT_KEY));

                    // notifying our adapter as data changed.
                    chatsRVAdapter.notifyDataSetChanged();
                } catch (JSONException e) {
                    e.printStackTrace();
              Log.d("Hello there",e.getLocalizedMessage());
                    // handling error response from bot.
                    chatModalArrayList.add(new MsgModal("No response", BOT_KEY));
                    chatsRVAdapter.notifyDataSetChanged();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                // error handling.
                Log.d("Hello", error.getLocalizedMessage());
                chatModalArrayList.add(new MsgModal("Sorry no response found", BOT_KEY));
                Toast.makeText(ChatbotActivity.this, "No response from the bot..", Toast.LENGTH_SHORT).show();
            }
        });

        // at last adding json object
        // request to our queue.
        queue.add(jsonObjectRequest);
    }
}
