import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from 'recoil';
import App from '../App';



describe('App component', () => {
    describe('The fisrt time to open the app', () => {
        it('should see the title, form inputs and "add" button', () => {
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

describe('After type two words and notes', () => {
    describe("As a user, I want to delete all inputs", () => {
        it('Should delete all items of the list', () => {
            render(<RecoilRoot><App /></RecoilRoot>);
            
            const word = screen.getByLabelText(/word/i);
            const note = screen.getByLabelText(/note/i);
            const button = screen.getByRole("button", { name: /add/i });
            
            // Creating First word
            userEvent.type(word, "My new word");
            userEvent.type(note, "My note");
            userEvent.click(button);

            // Creating Second word
            userEvent.type(word, "My second word");
            userEvent.type(note, "My second note");
            userEvent.click(button);

            // Searching words in list
            const newWord = screen.getByText(/my new word/i);
            const newWord2 = screen.getByText(/second word/i);

            // Confirm if the words are showed
            expect(newWord).toBeInTheDocument();
            expect(newWord2).toBeInTheDocument();

            const deleteAll = screen.getByRole("button", { name: /delete/i });
            userEvent.click(deleteAll);
           
            expect(newWord).not.toBeInTheDocument();
            expect(newWord2).not.toBeInTheDocument();    
        });

        describe("As a user, I want to delete just one input", () => {
            it('should delete just one word of the list', () => {
                render(<RecoilRoot><App /></RecoilRoot>);
            
                const word = screen.getByLabelText(/word/i);
                const note = screen.getByLabelText(/note/i);
                const button = screen.getByRole("button", { name: /add/i });
            
                // Creating First word
                userEvent.type(word, "My new word");
                userEvent.type(note, "My note");
                userEvent.click(button);

                // Searching word in list
                const newWord = screen.getByText(/my new word/i);

                // Confirm if the words are showed
                expect(newWord).toBeInTheDocument();

                const buttonDelete = screen.getByRole("button", { name: /x/i });
                userEvent.click(buttonDelete);
           
                expect(newWord).not.toBeInTheDocument();
            });
        });
    }); 
});
