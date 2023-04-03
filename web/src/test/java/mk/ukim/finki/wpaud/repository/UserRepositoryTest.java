package mk.ukim.finki.wpaud.repository;

import mk.ukim.finki.wpaud.model.enumerations.Role;
import mk.ukim.finki.wpaud.model.User;
import mk.ukim.finki.wpaud.model.projections.UserProjection;
import mk.ukim.finki.wpaud.repository.jpa.UserRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.expression.ExpressionException;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testFindAll() {
        List<User> userList = this.userRepository.findAll();
        Assert.assertEquals(3L, userList.size());
    }

    @Test
    public void testFetchAll() {
        List<User> userList = this.userRepository.fetchAll();
        Assert.assertEquals(3L, userList.size());
    }

    @Test
    public void testLoadAll() {
        List<User> userList = this.userRepository.loadAll();
        Assert.assertEquals(3L, userList.size());
    }

    @Test
    public void testProjectUsernameAndSurnameAndName() {
        UserProjection userProjection = this.userRepository.findByRole(Role.ROLE_ADMIN);
        Assert.assertEquals("admin", userProjection.getUsername());
        Assert.assertEquals("admin", userProjection.getName());
        Assert.assertEquals("admin", userProjection.getSurname());
    }

    @Test
    public void testOptimisticLock() {
        User user1 = this.userRepository.findByUsername("user")
                .orElseThrow(() -> new ExpressionException("not found"));
        User user2 = this.userRepository.findByUsername("user")
                .orElseThrow(() -> new ExpressionException("not found"));

        user1.setName("user1");
        user2.setName("user2");

        this.userRepository.save(user1);
        this.userRepository.save(user2);
    }

}
