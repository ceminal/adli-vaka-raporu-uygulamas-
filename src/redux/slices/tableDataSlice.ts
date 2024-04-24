import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IFormData } from '../../interfaces/formData';

interface TableData {
    tableData: IFormData[];
}

const initialState: TableData = {
    tableData: [],
};

const tableSlice = createSlice({
    name: 'tableData',
    initialState,
    reducers: {
        setTableData: (state, action: PayloadAction<TableData[]>) => {
            state.tableData = action.payload;
        },
        deleteRow: (state, action) => {
            state.tableData = state.tableData.filter(item => item.id !== action.payload);
        },
        clearTable: (state) => {
            state.tableData = [];
        }
    }
});

export const { setTableData } = tableSlice.actions;
export const selectTableData = (state: RootState) => state.tableData;
export const { deleteRow, clearTable  } = tableSlice.actions;
export default tableSlice.reducer;