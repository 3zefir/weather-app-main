import {Button, styled, Typography} from "@mui/material";

export const uiComponents = {
    GrayButton: styled(Button)({
        backgroundColor: 'hsl(243, 27%, 20%)',
        color: 'white',
        fontFamily: 'DM Sans',
        textTransform: 'capitalize',
        fontSize: '1rem',
        fontWeight: '300',
        width: '7.4em',
        borderRadius: '7px',
        height: '2.7em'
    }),
    ListTitle: styled(Typography)({
        color: 'white',
        fontFamily: 'DM Sans',
    }),
    ListSubtitle: styled(Typography)({
        color: 'white',
        fontFamily: 'DM Sans',
        fontSize: '.9rem'
    }),
    UnitsButton: styled(Button)({
        color: 'white',
        textTransform: 'capitalize',
        fontFamily: 'DM Sans',
        fontSize: '.95rem',
        width: '13.1em',
        display: 'flex',
        justifyContent: 'space-between'
    }),
    Title: styled(Typography)({
        color: 'white',
        fontFamily: 'Bricolage Grotesque',
        fontSize: '3.4rem',
        letterSpacing: '.8px',
        fontWeight: '500',


        '@media screen and (max-width: 767px)': {
            lineHeight: '62px'
        }
    }),
    SearchButton: styled(Button)({
        backgroundColor: 'hsl(233, 67%, 56%)',
        color: 'white',
        fontFamily: 'DM Sans',
        textTransform: 'capitalize',
        fontSize: '1.2rem',
        fontWeight: '300',
        width: '5.9em',
        borderRadius: '12px',

        '&:hover': {
            backgroundColor: 'hsl(248, 70%, 36%)',
        },

        '@media screen and (max-width: 767px)': {
            width: '17.5em',
            height: '2.8em'
        }
    }),
    TemperatureTitle: styled(Typography)({
        color: 'white',
        fontFamily: 'Bricolage Grotesque',
        fontWeight: '550',
        fontSize: '1.75rem'
    }),
    TemperatureParagraph: styled(Typography)({
        color: 'lightgray',
        fontFamily: 'Bricolage Grotesque',
        fontWeight: '550',
        fontSize: '1rem'
    }),
    TemperatureNumber: styled(Typography)({
        color: 'white',
        fontFamily: 'Dm Sans',
        fontWeight: '550',
        fontStyle: 'italic',
        fontSize: '5.8rem'
    }),
    ParamsTitle: styled(Typography)({
        color: 'lightgray',
        fontFamily: 'DM Sans',
        marginTop: '17px',
        marginLeft: '19px',
        fontSize: '1.15rem'
    }),
    ParamsInfo: styled(Typography)({
        color: 'lightgray',
        fontFamily: 'DM Sans',
        marginTop: '17px',
        marginLeft: '21px',
        fontSize: '1.9rem'
    }),
    ForecastTitle: styled(Typography)({
        marginLeft: '5px',
        fontFamily: 'DM Sans',
        color: 'lightgray',
        fontSize: '1.2rem',
    }),
    ForecastTemperature: styled(Typography)({
        marginRight: '15px',
        fontFamily: 'DM Sans',
        color: 'lightgray',
        fontSize: '1rem',
    }),
    SelectButton: styled(Button)({
        backgroundColor: 'hsl(243, 23%, 30%)',
        color: 'white',
        fontFamily: 'DM Sans',
        textTransform: 'capitalize',
        fontSize: '1rem',
        fontWeight: '300',
        width: '7.5em',
        height: '2.4em',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'flex-start',
        paddingLeft: '18.5px',

        '@media screen and (max-width: 767px)': {
            marginLeft: '-20px'
        }
    })
}