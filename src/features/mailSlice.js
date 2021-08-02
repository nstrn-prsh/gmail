import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
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

export const { openSendMessage, closeSendMessage } = mailSlice.actions;
export default mailSlice.reducer;

export const selectSendMessageIsOpen = (state) =>
     state.mail.selectSendMessageIsOpen;
