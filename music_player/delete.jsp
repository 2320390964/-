<%@ page language="java" import="java.util.*,java.sql.*" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"%>
<%  
        String sql;
         String id=null;
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
            id=request.getParameter("id");
        }
        catch(Exception e)
        {
            
        }
        sql="delete from music_list where id='"+id+"'";
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