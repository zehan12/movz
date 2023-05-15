import { render, screen } from "@testing-library/react";
import App from "../App";

describe('App',()=>{
    it('should have healine h1 Tailwind install',()=>{
        render(<App />);
        expect(screen.getByText(/App/i)).toBeInTheDocument();
    })
})