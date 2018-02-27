<%@ page language="java" import="java.util.*,java.sql.*" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"%>
<%  
        String sql;
        String l=null;
        int like=0;
         String id=null;
        PreparedStatement pre1=null;
        // 数据库链接
        Connection conn = null;  
        // 向数据库发送sql语句  
        Statement stat = null;
        // 结果集 
        String url = "jdbc:mysql://localhost:3306/music_website"; 
        String username="root";
        String pass="root";
        try {  
            Class.forName("com.mysql.jdbc.Driver");
            
            conn = DriverManager.getConnection(url, username, pass);  
            stat = conn.createStatement();
            l=request.getParameter("islike");
            like=Integer.parseInt(l);
            id=request.getParameter("id");
        }
        catch(Exception e)
        {
            
        }
        sql="update music_list set islike="+like+" where id='"+id+"'";
        try
        {
            stat.executeUpdate(sql);
        }
        catch (Exception e) {  
        out.print(e);
        } finally {  
            try {  
                stat.close();
                conn.close();
            } catch (Exception e) {  
            }  
        }  
    %>