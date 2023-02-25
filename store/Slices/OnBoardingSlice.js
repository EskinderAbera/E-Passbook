import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeStepIndex: 0,
    formData: [],
    openModal: false,
    signature: null,
    photo: null,
    idFront: null,
    idBack: null,

}

const onBoardingSlice = createSlice({
    name: "onBoard",
    initialState,
    reducers: {
        setActiveStepIndex: (state, { payload }) => {
            state.activeStepIndex = payload;
        },
        setFormData: (state, { payload }) => {
            state.formData = payload;
        },
        setOpenModal: (state, { payload }) => {
            state.openModal = payload;
        },
        setSignature: (state, { payload }) => {
            state.signature = payload;
        },
        setIdFront: (state, { payload }) => {
            state.idFront = payload;
        },
        setIdBack: (state, { payload }) => {
            state.idBack = payload;
        },
        setPhoto: (state, { payload }) => {
            state.photo = payload;
        }
    }
})

const { reducer, actions } = onBoardingSlice;
export const { setActiveStepIndex, setFormData, setOpenModal, setSignature, setIdFront, setIdBack, setPhoto } = actions
export default reducer;