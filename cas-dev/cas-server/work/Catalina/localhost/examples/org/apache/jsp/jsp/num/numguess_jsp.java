/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.21
 * Generated at: 2017-05-24 06:18:16 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.jsp.num;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import num.NumberGuessBean;

public final class numguess_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = new java.util.HashSet<>();
    _jspx_imports_classes.add("num.NumberGuessBean");
  }

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

final java.lang.String _jspx_method = request.getMethod();
if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method) && !javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSPs only permit GET POST or HEAD");
return;
}

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      num.NumberGuessBean numguess = null;
      synchronized (session) {
        numguess = (num.NumberGuessBean) _jspx_page_context.getAttribute("numguess", javax.servlet.jsp.PageContext.SESSION_SCOPE);
        if (numguess == null){
          numguess = new num.NumberGuessBean();
          _jspx_page_context.setAttribute("numguess", numguess, javax.servlet.jsp.PageContext.SESSION_SCOPE);
        }
      }
      out.write('\r');
      out.write('\n');
      org.apache.jasper.runtime.JspRuntimeLibrary.introspect(_jspx_page_context.findAttribute("numguess"), request);
      out.write("\r\n");
      out.write("\r\n");
      out.write("<html>\r\n");
      out.write("<head><title>Number Guess</title></head>\r\n");
      out.write("<body bgcolor=\"white\">\r\n");
      out.write("<font size=4>\r\n");
      out.write("\r\n");
 if (numguess.getSuccess()) { 
      out.write("\r\n");
      out.write("\r\n");
      out.write("  Congratulations!  You got it.\r\n");
      out.write("  And after just ");
      out.print( numguess.getNumGuesses() );
      out.write(" tries.<p>\r\n");
      out.write("\r\n");
      out.write("  ");
 numguess.reset(); 
      out.write("\r\n");
      out.write("\r\n");
      out.write("  Care to <a href=\"numguess.jsp\">try again</a>?\r\n");
      out.write("\r\n");
 } else if (numguess.getNumGuesses() == 0) { 
      out.write("\r\n");
      out.write("\r\n");
      out.write("  Welcome to the Number Guess game.<p>\r\n");
      out.write("\r\n");
      out.write("  I'm thinking of a number between 1 and 100.<p>\r\n");
      out.write("\r\n");
      out.write("  <form method=get>\r\n");
      out.write("  What's your guess? <input type=text name=guess>\r\n");
      out.write("  <input type=submit value=\"Submit\">\r\n");
      out.write("  </form>\r\n");
      out.write("\r\n");
 } else { 
      out.write("\r\n");
      out.write("\r\n");
      out.write("  Good guess, but nope.  Try <b>");
      out.print( numguess.getHint() );
      out.write("</b>.\r\n");
      out.write("\r\n");
      out.write("  You have made ");
      out.print( numguess.getNumGuesses() );
      out.write(" guesses.<p>\r\n");
      out.write("\r\n");
      out.write("  I'm thinking of a number between 1 and 100.<p>\r\n");
      out.write("\r\n");
      out.write("  <form method=get>\r\n");
      out.write("  What's your guess? <input type=text name=guess>\r\n");
      out.write("  <input type=submit value=\"Submit\">\r\n");
      out.write("  </form>\r\n");
      out.write("\r\n");
 } 
      out.write("\r\n");
      out.write("\r\n");
      out.write("</font>\r\n");
      out.write("</body>\r\n");
      out.write("</html>\r\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
