package console;

import java.util.Scanner;

/* ****************************************************************************
 *
 * BRIEF //
 *
 *   Your firm is implementing its student management prototype in Java.
 *   It's a command-line program, which the registrar's office will use to
 *   add students to the database upon enrollment.
 *
 *   The program should prompt the user for a student's first name; last name;
 *   middle initial; physical address; email address; and phone number.
 *
 *   After each prompt, the program should wait for the user's input.
 *
 *   Once the user has entered every piece of information, the program should
 *   print it all back to the console, and prompt the user to enter Y if the
 *   information is correct, or any other key otherwise.
 *
 *   For now, you should collect the user's response--i.e., y or otherwise--but
 *   don't worry about handling it. We'll get to that shortly.
 *
 *****************************************************************************/

public class ConsoleIO {

  public static void main(String[] args) {

    // You need to instantiate something to read user input. Do that here.
    Scanner in = new Scanner(System.in);


    /* Print a message to the screen prompting the user for a student's first
     *   name. Then, store their response in a String variable.
     *
     *   Repeat this for each of the student's attribute: first/last/middle
     *   name; address; email; and phone number (which you'll store as a
     *   String).
     */

      System.out.print("Enter your first name: ");
      String first = in.nextLine();
      System.out.print("Enter your last name: ");
      String last = in.nextLine();
      System.out.print("Enter your middle initial: ");
      String middle = in.nextLine();
      System.out.print("Enter your address: ");
      String address = in.nextLine();
      System.out.print("Enter your email: ");
      String email = in.nextLine();
      System.out.print("Enter your phone number: ");
      String phone = in.nextLine();
    /* Once you've gotten all the information, print the value of each
     *   variable. Use String.format, and %s to indicate a string
     *   substitution. */

      System.out.println(String.format("Name: %s %s %s", first, middle, last));
      System.out.println(String.format("Address: %s", address));
      System.out.println(String.format("Email: %s", email));
      System.out.println(String.format("Phone: %s", phone));

    /* Finally, print a message asking the user if this is correct information.
     *   Collect their response in a variable called confirmation. Don't do
     *   anything with it yet, though. */

  }

}
