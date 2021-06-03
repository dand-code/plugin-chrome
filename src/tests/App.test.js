import { render, screen } from "@testing-library/react";
import App from '../App';
import { RecoilRoot } from 'recoil';

describe('Initialize App component', () => {
    it('should see the title, form inputs and "add" button', () => {
        render(<RecoilRoot><App /></RecoilRoot>);
        const title = screen.getByRole("heading", { name: /words/i });
        const word = screen.getByLabelText(/word/i);
        const note = screen.getByLabelText(/note/i);


        expect(title).toBeInTheDocument();
        expect(word).toBeInTheDocument();
        expect(note).toBeInTheDocument();
    })
})