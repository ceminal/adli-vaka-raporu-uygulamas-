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
        setTableData: (state, action: PayloadAction<IFormData[]>) => {
            state.tableData = action.payload;
        },
        deleteRow: (state, action: PayloadAction<string>) => {
            state.tableData = state.tableData.filter(item => item.id !== action.payload);
        },
        clearTable: (state) => {
            state.tableData = [];
        }
    }
});

export const { setTableData, deleteRow, clearTable } = tableSlice.actions;
export const selectTableData = (state: RootState) => state.table.tableData;
export default tableSlice.reducer;