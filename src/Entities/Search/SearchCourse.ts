import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFreeCourse } from "../Cards/FreeCourseCards/FreeCourse.types";
import axios from "axios";

export const searchFreeCourses = createAsyncThunk(
    'search/freeCourses', async (searchValue: string) => {

        try {
            const response = await axios.get<IFreeCourse[]>(`api?q=${searchValue}`);
            return response.data;
        } catch(error) {
            console.log(error);
            throw error;
        }

    }
);