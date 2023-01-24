import React from 'react';
import { useParams } from 'react-router-dom';
import {BlexPdfViewer} from "../../components/BlexPdfViewer/BlexPdfViewer";

function Item() {
    const { id } = useParams();
    return (
        <div>
            <h1>OESUHTOESTNH</h1>
            <BlexPdfViewer />
        </div>
    );
}

export default Item;
