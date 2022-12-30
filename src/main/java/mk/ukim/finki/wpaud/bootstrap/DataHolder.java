package mk.ukim.finki.wpaud.bootstrap;

import javax.annotation.PostConstruct;
import mk.ukim.finki.wpaud.model.Category;
import mk.ukim.finki.wpaud.model.Manufacturer;
import mk.ukim.finki.wpaud.model.Product;
import mk.ukim.finki.wpaud.model.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataHolder {
    public static List<Category> categories = new ArrayList<>();
    public static List<User> users = new ArrayList<>();
    public static List<Manufacturer> manufacturers = new ArrayList<>();
    public static List<Product> products = new ArrayList<>();

    @PostConstruct
    public void init(){
        categories.add(new Category("Software", "Software Category"));
        categories.add(new Category("Books", "Books Category"));
        categories.add(new Category("Movies", "Movies Category"));

        users.add(new User("boris.stojchevski","bs","Boris","Stojchevski"));
        users.add(new User("admin","admin","admin","admin"));
        users.add(new User("martin.martinov","mm","Martin","Martinov"));

        Manufacturer manufacturer = new Manufacturer("Nike", "NY NY");
        manufacturers.add(manufacturer);

        Category category = new Category("Sport", "Sports category");
        products.add(new Product("Ball", 235.8, 7, category, manufacturer));
        products.add(new Product("Table", 550.0, 2, category, manufacturer));
        products.add(new Product("TV", 999.99, 3, category, manufacturer));
    }

}
