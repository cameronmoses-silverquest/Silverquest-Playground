package com.silverquest.timesheets.interceptor;

import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;


public class LoginInterceptor extends HandlerInterceptorAdapter  {

	private static final Logger logger = Logger.getLogger(LoginInterceptor.class.getName());

	private UserService userService = UserServiceFactory.getUserService();
	private User user;
	
	@Override
	public void postHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		
		Map<String, Object> model = new HashMap<String, Object>();
		
		model.put("userService", userService);
		model.put("user", user);
		String msg = "*-*- Testing: intercepted by the LoginInterceptor -*-*-"; 
		model.put("msg", msg);

		modelAndView.addAllObjects(model);
		super.postHandle(request, response, handler, modelAndView);
	}

	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		
        user = userService.getCurrentUser();
        
        logger.log(Level.INFO, "*-*- INTERCEPTED -*-*");
        if (user != null) {
        	logger.log(Level.INFO, "Interceptor - user:" + user.getNickname());
        	return true;
        } else {
        	logger.log(Level.INFO,"Interceptor - user null!!! LOGIN!"); 
        	response.sendRedirect(userService.createLoginURL(request.getRequestURI()));
        	return false;
        }
	}

}
