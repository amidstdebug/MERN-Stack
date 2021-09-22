//styling in javascript

import {makeStyles} from "@material-ui/core/styles";

export default makeStyles(() => (
    {
        appBar: {
            borderRadius: 15,
            margin: '30px 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        heading: {
            color: 'rgb(119,27,168)',
            fontFamily: "-moz-initial"
        },
        image: {
            marginLeft: '15px',

        },
    }
))