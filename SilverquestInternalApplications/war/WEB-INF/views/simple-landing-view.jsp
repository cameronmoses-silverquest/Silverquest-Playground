<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.List" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>

<jsp:useBean id="userService" scope="request" type="com.google.appengine.api.users.UserService" />
<jsp:useBean id="user" scope="request" type="com.google.appengine.api.users.User" />
             
<html>
	<head>
		<jsp:include page="include.jsp" />
		<link rel="stylesheet" href="/style.css" type="text/css"></link>
	</head>
	
	<body>
	    <h1>Landing Page</h1><img src="http://code.google.com/appengine/images/appengine-silver-120x30.gif" alt="Powered by Google App Engine" />
	    <ul>
	      <li><a href="/timesheets/intro.htm">Create a new TimeSheet</a></li>
	      <li><a href="">See Corrections</a></li>
	      <li><a href="/simple-admin/intro.htm">Admin</a></li>
	      <li><a href="">Approve TimeSheets</a></li>
	    </ul>
	
	   *-<c:out value="${msg}"/>-* <br>
	   <c:out value="(HtmlUtil.createHref(userService.createLogoutURL()))"/>
	   
	   <c:if test="${not empty user}">
			Hello -*-*-*<c:out value="${user.nickname}"/>-*-*-*-
			<a href="<%= userService.createLogoutURL("/") %>">sign out</a>
	   </c:if>
	   <c:if test="${empty user}">
	   		<a href="<%= userService.createLoginURL(request.getRequestURI()) %>">Sign in with Google Account</a> --%>
	   </c:if>

	</body>
</html>