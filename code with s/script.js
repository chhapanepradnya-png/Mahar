public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
import android.widget.Toast;
import android.app.Activity;
import android.os.Bundle;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // This shows a small popup at bottom
        Toast.makeText(this, "Hello", Toast.LENGTH_SHORT).show();
    }
}