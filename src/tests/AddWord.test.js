import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddWord from "../components/AddWord";
import { RecoilRoot } from 'recoil';



describe("Component with a form", () => {
    it("Call onSubmit event with word and note", () => {
        const saveWord = jest.fn();
        render(<RecoilRoot><AddWord saveWord={ saveWord }/></RecoilRoot>);

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
});