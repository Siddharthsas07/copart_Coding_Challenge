// Class
public class Convert {                      
//Method of the class that converts String into Integer	
	public int convertIntoInt(String s)
	{
		int char_count = s.length();
		int output = 0;
		
		System.out.println(char_count);
		Character a[] = new Character[char_count];
		for (int i=s.length() ; i>=1; i--){
			Character c = s.charAt(i-1);
			a[i-1] = c;
		}
		
		for(int j =1 ; j<=a.length; j++){
			output += Character.getNumericValue(a[j-1])*Math.pow(10,a.length-j);

		}
		
		return output;
	}
//Main Method		
	public static void main(String args[])  
	{
		String abc = "12345";
		Convert con = new Convert();                 //object of the Class
		int output = con.convertIntoInt(abc);        // method is invoked.
		System.out.println("Integer Output : " + output);
	}

}
