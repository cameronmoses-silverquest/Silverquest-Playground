<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<jsp:useBean id="userService" scope="request" type="com.google.appengine.api.users.UserService" />
<jsp:useBean id="user" scope="request" type="com.google.appengine.api.users.User" />


<div align="center" style="background:#e9f3f7; border: 1px solid; border-color: #ccc; color: #666; width:60%">
	<p><c:out value="${msg}" /></p>
	<p>
		<c:if test="${not empty user}">
			Hello *-*-*- <c:out value="${user.nickname}" /> -*-*-* click
			<a href="<%=userService.createLogoutURL("/")%>">here to sign out</a>
		</c:if>
		<c:if test="${empty user}">
			<a href="<%=userService.createLoginURL(request.getRequestURI())%>">Sign
				in with Google Account</a> --%>
	   </c:if>
	</p>
</div>