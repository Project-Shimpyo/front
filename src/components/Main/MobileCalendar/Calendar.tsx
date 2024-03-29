import * as React from 'react';
import { useState } from 'react'
import moment from "moment";
import 'moment/locale/ko'
import styled from '@emotion/styled';

import { Header } from './Header';
import { Days } from './Days';
import { Cells } from './Cells';

const StyledCalendarDiv = styled.div`
padding:10px;
`

interface CalendarProps {
    soldoutCheck?: boolean
}

export const Calendar = ({soldoutCheck}:CalendarProps) => {
    const [currentDate, setCurrentDate] = useState(moment().format());

    return (
        <StyledCalendarDiv>
            <Header currentDate={currentDate} setCurrentDate={setCurrentDate} />
            <Days />
            <Cells currentDate={currentDate} soldoutCheck={soldoutCheck} />
        </StyledCalendarDiv>
    )
}