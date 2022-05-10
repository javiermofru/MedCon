// package es.upm.dit.isst.medcon.config;

// import javax.sql.DataSource;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.annotation.Bean;
// import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.builders.WebSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
// import org.springframework.security.crypto.factory.PasswordEncoderFactories;
// import org.springframework.security.crypto.password.PasswordEncoder;

// @EnableWebSecurity
// public class SecurityConfig extends WebSecurityConfigurerAdapter {

//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return PasswordEncoderFactories.createDelegatingPasswordEncoder();
//     }

//     @Autowired
//     DataSource ds;
    
//     @Override   //JDBC Authentication
//     protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//         auth.jdbcAuthentication().dataSource(ds)
//             .usersByUsernameQuery("select colegiado as username, contraseña as password, TRUE as enabled from medico where colegiado=?")
//             .authoritiesByUsernameQuery("select colegiado as username, 'ROLE_MED' as authority from medico where colegiado=?");
//     }

//     @Override
//     protected void configure(HttpSecurity http) throws Exception {
//         http
//             .authorizeRequests()                //Define who can access the resources
//             .antMatchers("/").permitAll()
//             .antMatchers("/salaespera").permitAll()
//             .antMatchers("/paciente").permitAll()
//             .antMatchers("/paciente/**").permitAll()
//             .antMatchers("/medico").permitAll()
//             .antMatchers("/medico/**").permitAll()
//             //.antMatchers("/medico/**").hasRole("MED")
//             .anyRequest().authenticated()   //Authenticated users can perform any other request not included above
//         .and().formLogin().loginPage("/medico").permitAll() 
//         .and().logout().permitAll();
//     }

//     @Override
//     public void configure(WebSecurity web) throws Exception {
//         web
//             .ignoring()
//             .antMatchers("/h2-console/**"); //To check h2 through its web interface
//     }
// }
