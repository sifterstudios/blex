import React from 'react';
import { useParams } from 'react-router-dom';
import {BlexPdfViewer} from "../../components/BlexPdfViewer/BlexPdfViewer";

function Item() {
    const { id } = useParams();
    return (
        <div >
            <h1>PDF-viewer</h1>
            {<BlexPdfViewer id={parseInt(id as string)}/>}
        </div>
    );
}

export default Item;
