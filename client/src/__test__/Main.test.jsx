import { render, screen } from "@testing-library/react";
import Main from "../container/Main";
import React from "react";
import { authDefaultState } from "../reducers/auth.reducer";
import { UserContextProvider } from "../contexts/user.context";
import { AuthContextProvider } from "../contexts/auth.context";

 
 describe("Main component", () => {
   test("renders main app title and buttons", () => {
     render(<Main />, {
       withContext: [
         { context: AuthContextProvider, contextValue: authDefaultState },
         { context: UserContextProvider, contextValue: {user:null} },
       ],
     });
     // Check if the main app title is rendered
     const titleElement = screen.getByText("Main App!");
     expect(titleElement).toBeInTheDocument();
 
     // Check if the "Go Console" button is rendered
     const goConsoleButton = screen.getByRole("button", { name: "Go Console" });
     expect(goConsoleButton).toBeInTheDocument();
 
     // Check if the "rendered" button is rendered
     const renderedButton = screen.getByRole("button", { name: "rendered" });
     expect(renderedButton).toBeInTheDocument();
   });
 });


// describe('App',()=>{
//     it('should have healine h1 Tailwind install',()=>{
//         render(<App />);
//         expect(screen.getByText(/App/i)).toBeInTheDocument();
//     })
// })