import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useDispatch, useSelector } from "react-redux";
import { createChartItem, deleteChartItem, updateChartsItem } from '../../actions/charts';
import { useTranslation } from "react-i18next";

const ChartsTabs = () => {
    const { t } = useTranslation(['home', 'main']);
    const dispatch = useDispatch();

    const [data, setData] = useState([]);
    const chartsData = useSelector(state => state.charts);
    const initialChartState = {
        billsMainLabel: "Bills",
        billsLabel: "",
        billsValue: 0
    };

    const initialChartUpdateState = {
        salaryUpdateValue: "",
        billsUpdateLabel: "",
        billsUpdateValue: 0
    };

    const initialChartDeleteState = {
        billsDeleteLabel: ""
    };

    const [charts, setCharts] = useState(initialChartState);
    const [updateCharts, setUpdateCharts] = useState(initialChartUpdateState);
    const [deleteCharts, setDeleteCharts] = useState(initialChartDeleteState);
    const [value, setValue] = React.useState();
    const [salaryDefaultValue, setSalaryDefaultValue] = useState(0);

    useEffect(() => {
        if (chartsData.length !== 0) {
            let temp = [];
             setSalaryDefaultValue(Number(chartsData[1].at(2)));

             chartsData && chartsData.map((item, index) => {
                 if (index !== 0) {
                    temp.push(item[1]);
                 }
             })
             setData(temp);
             setValue('1');
        }
    }, [chartsData])

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setSalaryDefaultValue(chartsData && chartsData.length > 0 && chartsData[1].at(2));
    }

    const handleInputChange = event => {
        let { name, value } = event.target;
        if (name === "billsValue") {
            value = Number(value);
        }
        setCharts({ ...charts, [name]: value });
    };

    const handleUpdateChange = (event) => {
        let { name, value } = event.target;
        if (name === "billsUpdateValue") {
            value = Number(value);
        }
        setUpdateCharts({ ...updateCharts, [name]: value });
    }

    const handleChangeDropdown = (event) => {
        let { name, value } = event.target;
        setUpdateCharts({ ...updateCharts, [name]: value });
    }

    const handleChangeDeleteDropdown = (event) => {
        let { name, value } = event.target;
        setDeleteCharts({ ...deleteCharts, [name]: value });
    }

    const addChartItem = () => {
        const temp = [charts.billsMainLabel, charts.billsLabel, charts.billsValue];
        dispatch(createChartItem(temp));
    }

    const updateChartItem = () => {
        const temp = [updateCharts.salaryUpdateValue, updateCharts.billsUpdateLabel, updateCharts.billsUpdateValue];
        dispatch(updateChartsItem(temp));
    }

    const deleteChartItems = () => {
       dispatch(deleteChartItem(deleteCharts.billsDeleteLabel));
    }

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label={t("addItem")} value="1" />
                        <Tab label={t("updateItem")} value="2" />
                        <Tab label={t("deleteItem")} value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                name="billsMainLabel"
                                required
                                id="addSalaryID"
                                label={t("enterSalary")}
                                disabled
                                defaultValue={salaryDefaultValue}
                                onChange={handleInputChange}
                            />
                            <TextField
                                name="billsLabel"
                                required
                                label={t("enterNewBillName")}
                                defaultValue=""
                                onChange={handleInputChange}
                            />
                            <TextField
                                name="billsValue"
                                required
                                label={t("enterNewBillValue")}
                                defaultValue="0"
                                onChange={handleInputChange}
                            />
                            <button onClick={addChartItem}>{t("addButton")}</button>
                        </div>
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                name="salaryUpdateValue"   
                                required
                                id="updateSalaryID"
                                label={t("updateSalary")}
                                defaultValue={salaryDefaultValue}
                                onChange={handleUpdateChange}
                                disabled
                            />
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                <InputLabel>{t("selectBillName")}</InputLabel>
                                <Select
                                    name="billsUpdateLabel"
                                    labelId="updateBillLabel"
                                    onChange={handleChangeDropdown}>
                                    {data && data.map((item) => {
                                        return <MenuItem value={item}>{item}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <TextField
                                name="billsUpdateValue"
                                required
                                label={t("updateBillValue")}
                                onChange={handleUpdateChange}
                            />
                            <button onClick={updateChartItem}>{t("updateButton")}</button>
                        </div>
                    </Box>
                </TabPanel>
                <TabPanel value="3"> <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel>{t("selectBillName")}</InputLabel>
                    <Select
                        name="billsDeleteLabel"
                        labelId="deleteBillLabel"
                        onChange={handleChangeDeleteDropdown}>
                        {data && data.map((item, idx) => {
                            return <MenuItem value={item}>{item}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                    <button onClick={deleteChartItems}>{t("deleteButton")}</button>
                </TabPanel>
            </TabContext>
        </Box>
    );
}

export default ChartsTabs;
