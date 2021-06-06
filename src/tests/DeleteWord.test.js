import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from 'recoil';
import App from '../App';

describe('Deleting words', () => {
    describe("As a user, I want to delete words", () => {
        it('Should remove only one word', () => {
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

            const buttonDelete = screen.getByTestId("del_My new word");
            userEvent.click(buttonDelete);
        
            // The word was removed from the list
            expect(newWord).not.toBeInTheDocument();
        });

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
    }); 
});