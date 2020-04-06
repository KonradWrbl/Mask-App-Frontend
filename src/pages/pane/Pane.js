import React, { useState, useEffect } from 'react';
import { FullButton } from '../../components/FullButton'
import { Link } from 'react-router-dom';
import { NavSpacing, ButtonContainer2, PaneContainer, StyledTable, StyledCaption, StyledThead, StyledTr, StyledTh, StyledTd, StyledTbody, TableContainer, DetailsContainer, DetailsWrapper, DetailsTitle, LoadingWrapper, Loader, StyledTdMod } from './style';
import Axios from 'axios';
import { ButtonContainer } from '../../forms/orderForm/style'

function useForceUpdate(){
    const [, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}

const Pane = () => {

    const [orders, setOrders] = useState([])
    const [isAdmin, setAdmin] = useState(false)
    const [details, setDetails] = useState({})
    const [showDetails, setShowDetails] = useState(false)
    const [isLoading, setLoading ] = useState(false)
    const [activePostID, setActivePostID ] = useState('')

    const onLoad = () => {
        setLoading(true)

        const token = localStorage.getItem('FBIdToken')
        const config = {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
            }
        }

        const getAllData = () => {
            Axios.get('/orders')
            .then((res) => {
                setOrders(res.data)
                console.log(res.data);
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
        }

        const getUserData = () => {
            Axios.get('/userorders', config)
            .then((res) => {
                setOrders(res.data)
                console.log(res.data);
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            })
        }

        Axios.get('/type', config)
            .then(res => {
                console.log(res.data);
                setAdmin(res.data);
                if(res.data) {
                    getAllData()
                    setLoading(false)
                } else {
                    getUserData()

                }
            })
    }

    useEffect(() => {
        onLoad();
    }, [])

    const toggleDetails = (e, id) => {
        e.stopPropagation()
        for(let i = 0; i < orders.length; i++) {
            if(orders[i].orderId === id) {
                setDetails(orders[i]);
                setShowDetails(true)
                setActivePostID(id)
            }
        }
    }

    const setStatus = () => {
        console.log(activePostID);

        const token = localStorage.getItem('FBIdToken')
        const config = {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
            }
        }
        const data = {
            id: activePostID
        }

        Axios.post('/setstatus', data, config,)
            .then(res => {
                console.log(res.data);
                onLoad();
            })
    }



    const doneOrdersList = orders.map((el, key) =>{
        const id = el.orderId;
        const done = el.done;
        console.log('działam')
        if (done) return(

            <StyledTr key={id} onClick={(e) => toggleDetails(e, id)}>
                <StyledTd>{el.unit}</StyledTd>
                <StyledTd>HD-Lite</StyledTd>
                <StyledTd>{el.visorsSoft}</StyledTd>
                <StyledTd>{el.PETFilament}</StyledTd>
                <StyledTd>{el.PETFoil}</StyledTd>
                <StyledTd>{el.createdAt.replace('T', ' ').replace('Z', '')}</StyledTd>
            </StyledTr>

        )
        return []
    }
    )



    const undoneOrdersList = orders.map((el, key) =>{
        const id = el.orderId;
        const done = el.done;
        if (!done) return(
            <StyledTr key={id} onClick={(e) => toggleDetails(e, id)}>
                <StyledTd>{el.unit}</StyledTd>
                <StyledTd>HD-LITE</StyledTd>
                <StyledTd>{el.visorsSoft}</StyledTd>
                <StyledTd>{el.PETFilament}</StyledTd>
                <StyledTd>{el.PETFoil}</StyledTd>
                <StyledTd>{el.createdAt.replace('T', ' ').replace('Z', '')}</StyledTd>
            </StyledTr>
        )
        return []
        }
    )

    const ordersDetailsList = (
        <>
            <StyledTr>
                <StyledTdMod>Identyfikator zamówienia</StyledTdMod>
                <StyledTdMod>{details.orderId}</StyledTdMod>
            </StyledTr>
            <StyledTr>
                <StyledTdMod>Data złożenia zamówienia</StyledTdMod>
                <StyledTdMod>{details.createdAt}</StyledTdMod>
            </StyledTr>
            <StyledTr>
                <StyledTdMod>Imię i Nazwisko</StyledTdMod>
                <StyledTdMod>{`${details.name} ${details.surname}`}</StyledTdMod>
            </StyledTr>
            <StyledTr>
                <StyledTdMod>Numer telefonu</StyledTdMod>
                <StyledTdMod>{details.phone}</StyledTdMod>
            </StyledTr>
            <StyledTr>
                <StyledTdMod>typ</StyledTdMod>
                <StyledTdMod>{details.maskType}</StyledTdMod>
            </StyledTr>
            <StyledTr>
                <StyledTdMod>Ilość przyłbic HD-LITE</StyledTdMod>
                <StyledTdMod>{details.visors}</StyledTdMod>
            </StyledTr>
            <StyledTr>
                <StyledTdMod>Ilość przyłbic Druk 3D</StyledTdMod>
                <StyledTdMod>{details.visors}</StyledTdMod>
            </StyledTr>
            <StyledTr>
                <StyledTdMod>Filament PET (w kg)</StyledTdMod>
                <StyledTdMod>{details.PETFilament}</StyledTdMod>
            </StyledTr>
            <StyledTr>
                <StyledTdMod>Folie PET (w m2)</StyledTdMod>
                <StyledTdMod>{details.PETFoil}</StyledTdMod>
            </StyledTr>
            <StyledTr>
                <StyledTdMod>Nazwa jadnostki</StyledTdMod>
                <StyledTdMod>{details.unit}</StyledTdMod>
            </StyledTr>
            <StyledTr>
                <StyledTdMod>Adres jednostki</StyledTdMod>
                <StyledTdMod>{details.unitAdress}</StyledTdMod>
            </StyledTr>
            <StyledTr>
                <StyledTdMod>Imię i nazwisko osoby odbierającej zamówienie</StyledTdMod>
                <StyledTdMod>{`${details.contactName} ${details.contactSurname}`}</StyledTdMod>
            </StyledTr>
            <StyledTr>
                <StyledTdMod>Telefon do osoby odbierającej zamówienie</StyledTdMod>
                <StyledTdMod>{details.contactPhone}</StyledTdMod>
            </StyledTr>

        </>
    )


    const compareType = (a, b) => {
        const typeA = a.visorsHard.toUpperCase()
        const typeB = b.visorsHard.toUpperCase()

        let comp = 0;
        if (typeA > typeB) comp = 1;
        else if(typeA < typeB) comp = -1;

        return comp;
    }

    const compareDate = (a, b) => {
        const typeA = a.createdAt.toUpperCase()
        const typeB = b.createdAt.toUpperCase()

        let comp = 0;
        if (typeA > typeB) comp = 1;
        else if(typeA < typeB) comp = -1;

        return comp * -1;
    }

    const reload = useForceUpdate()

    const sortTab = (kind) => {
        const tempOrders = orders
        switch(kind) {
            case 'type':
                tempOrders.sort(compareType)
                break;
            case 'date':
                tempOrders.sort(compareDate)
                break;
            default:
                tempOrders.sort(compareDate)
                break;
        }

        setOrders(tempOrders)
        console.log(orders)
        reload()
    }




    return (
        <PaneContainer>
            <NavSpacing />
            {isLoading &&
                <LoadingWrapper>
                    <Loader>
                        <div></div>
                        <div></div>
                    </Loader>
                </LoadingWrapper>
            }
            {showDetails &&
                <DetailsContainer onClick={()=>setShowDetails(false)}>
                    <DetailsWrapper>
                        <DetailsTitle>Szczegóły</DetailsTitle>
                        <StyledTable>
                            <StyledTbody>
                                {ordersDetailsList}
                            </StyledTbody>
                        </StyledTable>
                    </DetailsWrapper>
                    <ButtonContainer>
                            <FullButton onClick={setStatus}>
                                Oznacz jako wykonane
                            </FullButton>
                    </ButtonContainer>
                </DetailsContainer>}
            <ButtonContainer2>
                <FullButton onClick={() => sortTab('type')}>
                    Sortuj: typ
                </FullButton>
                <FullButton onClick={() => sortTab('date')}>
                    Sortuj: data
                </FullButton>
            </ButtonContainer2>
            <TableContainer>
                <StyledTable>
                    <StyledCaption>Zamówienia oczekujące na realizację</StyledCaption>
                    <StyledThead>
                        <StyledTr>
                            <StyledTh>Nazwa jednostki</StyledTh>
                            <StyledTh>Przyłbice Druk 3D</StyledTh>
                            <StyledTh>Przyłbice HD-LITE</StyledTh>
                            <StyledTh>Filament PET</StyledTh>
                            <StyledTh>Folie PET</StyledTh>
                            <StyledTh>Data</StyledTh>
                        </StyledTr>
                    </StyledThead>
                    <StyledTbody>
                        {undoneOrdersList}
                    </StyledTbody>
                </StyledTable>
            </TableContainer>
            <TableContainer>
                <StyledTable>
                    <StyledCaption>Zrealizowane zamówienia</StyledCaption>
                    <StyledThead>
                        <StyledTr>
                            <StyledTh>Nazwa jednostki</StyledTh>
                            <StyledTh>Przyłbice Druk 3D</StyledTh>
                            <StyledTh>Przyłbice HD-LITE</StyledTh>
                            <StyledTh>Filament PET</StyledTh>
                            <StyledTh>Folie PET</StyledTh>
                            <StyledTh>Data</StyledTh>
                        </StyledTr>
                    </StyledThead>
                    <StyledTbody>
                        {doneOrdersList}
                    </StyledTbody>
                </StyledTable>
            </TableContainer>
            <ButtonContainer2>
                <Link to='/order'>
                    <FullButton>
                        Złóż zamówienie
                    </FullButton>
                </Link>
                {isAdmin &&
                    <Link to='/register'>
                        <FullButton>
                            Zarejestruj użytkownika
                        </FullButton>
                    </Link>
                }
            </ButtonContainer2>

        </PaneContainer>
    )
}

export default Pane;