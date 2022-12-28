package mk.ukim.finki.wpaud.bootstrap;

import javax.annotation.PostConstruct;
import mk.ukim.finki.wpaud.model.Category;
import mk.ukim.finki.wpaud.model.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataHolder {
    public static List<Category> categories = new ArrayList<>();
    public static List<User> users = new ArrayList<>();
    @PostConstruct
    public void init(){
        categories.add(new Category("Software", "Software Category"));
        categories.add(new Category("Books", "Books Category"));
        users.add(new User("boris.stojchevski","bs","Boris","Stojchevski"));
        users.add(new User("admin","admin","admin","admin"));
        users.add(new User("martin.martinov","mm","Martin","Martinov"));
    }

}
