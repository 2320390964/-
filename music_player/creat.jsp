<%@ page language="java" import="java.util.*,java.sql.*" pageEncoding="UTF-8" contentType="text/html;charset=UTF-8"%>
<%  
        String sql;
        String[] arr=null;
        PreparedStatement pre1=null;
        // 数据库链接
        Connection conn = null;  
        // 向数据库发送sql语句  
        Statement stat = null;
        // 结果集 
        String url = "jdbc:mysql://localhost:3306/music_website?useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull"; 

        String username="root";
        String pass="root";
        try {  
            Class.forName("com.mysql.jdbc.Driver");
            
            conn = DriverManager.getConnection(url, username, pass);  
            
            stat = conn.createStatement();
            String res=request.getParameter("arr");
            if(res!=null&&!("".equals(res)))
            {
                res=res.replaceAll("\'","\\\'");
                res=res.replaceAll("\"","\"");
            }
            arr=res.split(",");
            /*for(int i=0;i<arr.length;i++)
            {
                out.print(arr[i]);
            }*/
        }
        catch(Exception e)
        {}
        //arr=songid+','+name+','+'0,'+singer+','+pic+','+lyr;
        /*$songid=$arr[0];
        $songname=$arr[1];
        $image_id=$arr[4];
        $singer=$arr[3];
        $lyr=$arr[5];*/
        sql="insert into music_list (name,id,image_id,lyr,singer) values (?,?,?,?,?)";
        try
        {
            pre1=conn.prepareStatement(sql);
            pre1.setString(1, arr[1]);
            pre1.setString(2, arr[0]);
            pre1.setString(3, arr[4]);
            pre1.setString(4,arr[5]);
            pre1.setString(5, arr[3]);
            pre1.executeUpdate();
            pre1.close();
        }
        catch (Exception e) {  
        out.print("oops!something wrong");
  
        } finally {  
            try {  
                stat.close();
                conn.close();
            } catch (Exception e) {  
            }  
        }  
    %>  