import React from 'react';
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from 'recoil';
import AddWord from "../components/AddWord";

describe("AddWord component", () => {
    describe("As a user, I want to add a new word with note", () => {
        it("Should save a new word on local storage", () => {
            const saveWord = jest.fn();
            render(<RecoilRoot><AddWord saveWord={saveWord} /></RecoilRoot>);
    
            const word = screen.getByLabelText(/word/i);
            userEvent.type(word, "My new word");
    
            const note = screen.getByLabelText(/note/i);
            userEvent.type(note, "My note");
    
            const button = screen.getByRole("button", { name: /add/i });
            userEvent.click(button);
    
            expect(saveWord).toBeCalledTimes(1);
            expect(saveWord).toHaveBeenCalledWith({
                word: "My new word",
                note: "My note",
            });
        });

        it("Should show a new word on screen", () => {
            const saveWord = jest.fn();
            render(<RecoilRoot><AddWord saveWord={saveWord} /></RecoilRoot>);
    
            const word = screen.getByLabelText(/word/i);
            userEvent.type(word, "My new word");
    
            const note = screen.getByLabelText(/note/i);
            userEvent.type(note, "My note");
    
            const button = screen.getByRole("button", { name: /add/i });
            userEvent.click(button);
    
            expect(word).toBeInTheDocument();
            expect(note).toBeInTheDocument();
        });

        describe("As a user, I want to add a new word without a note", () => {
            it("Should show a error alert on screen", () => {
                const saveWord = jest.fn();
                global.alert = jest.fn();
                render(<RecoilRoot><AddWord saveWord={saveWord} /></RecoilRoot>);
        
                const word = screen.getByLabelText(/word/i);
                userEvent.type(word, "My new word");
        
                const note = screen.getByLabelText(/note/i);
                userEvent.type(note, "");
        
                const button = screen.getByRole("button", { name: /add/i });
                userEvent.click(button);
                
                expect(global.alert).toHaveBeenCalledTimes(1);
            });
        });

        describe("As a user, I want to add a new note without a word", () => {
            it("Should show a error alert on screen", () => {
                const saveWord = jest.fn();
                global.alert = jest.fn();
                render(<RecoilRoot><AddWord saveWord={saveWord} /></RecoilRoot>);
        
                const word = screen.getByLabelText(/word/i);
                userEvent.type(word, "");
        
                const note = screen.getByLabelText(/note/i);
                userEvent.type(note, "My note");
        
                const button = screen.getByRole("button", { name: /add/i });
                userEvent.click(button);
                
                expect(global.alert).toHaveBeenCalledTimes(1);
            });
        });

        describe("As a user, I want type a empty word and empty note input", () => {
            it("Should show a error alert on screen", () => {
                const saveWord = jest.fn();
                global.alert = jest.fn();
                render(<RecoilRoot><AddWord saveWord={saveWord} /></RecoilRoot>);
        
                const word = screen.getByLabelText(/word/i);
                userEvent.type(word, "");
        
                const note = screen.getByLabelText(/note/i);
                userEvent.type(note, "");
        
                const button = screen.getByRole("button", { name: /add/i });
                userEvent.click(button);
                
                expect(global.alert).toHaveBeenCalledTimes(1);
            });
        });
    });
});