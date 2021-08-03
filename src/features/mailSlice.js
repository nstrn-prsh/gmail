import { createSlice } from "@reduxjs/toolkit";

export const mailReducer = createSlice({
     name: "mail",
     initialState: {
          sendMessageIsOpen: false,
     },
     reducers: {
          openSendMessage: (state) => {
               state.sendMessageIsOpen = true;
          },
          closeSendMessage: (state) => {
               state.sendMessageIsOpen = false;
          },
     },
});

export const { openSendMessage, closeSendMessage } = mailReducer.actions;
export default mailReducer.reducer;

export const selectSendMessageIsOpen = (state) =>
     state.mail.sendMessageIsOpen;
