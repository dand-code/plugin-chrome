import React from 'react';
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from 'recoil';
import App from '../App';



describe('App component', () => {
    describe('As a user, I will open the app for the first time', () => {
        it('Should see the title, the form inputs and "add" button', () => {
            render(<RecoilRoot><App /></RecoilRoot>);
            const title = screen.getByRole("heading", { name: /words/i });
            const word = screen.getByLabelText(/word/i);
            const note = screen.getByLabelText(/note/i);


            expect(title).toBeInTheDocument();
            expect(word).toBeInTheDocument();
            expect(note).toBeInTheDocument();
        });        
    });
});