import React, { useState, useEffect } from 'react';
import { FullButton } from '../../components/FullButton'
import { Link } from 'react-router-dom';
import { ButtonContainer, PaneContainer, StyledTable, StyledCaption, StyledThead, StyledTr, StyledTh, StyledTd, StyledTbody, TableContainer, DetailsContainer, DetailsWrapper, DetailsTitle, LoadingWrapper, Loader } from './style';
import Axios from 'axios';

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
                <StyledTd>{el.name}</StyledTd>
                <StyledTd>{el.surname}</StyledTd>
                <StyledTd>{el.maskType}</StyledTd>
                <StyledTd>{el.visors}</StyledTd>
                <StyledTd>{el.frames}</StyledTd>
                <StyledTd>{el.forms}</StyledTd>
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
                <StyledTd>{el.name}</StyledTd>
                <StyledTd>{el.surname}</StyledTd>
                <StyledTd>{el.maskType}</StyledTd>
                <StyledTd>{el.visors}</StyledTd>
                <StyledTd>{el.frames}</StyledTd>
                <StyledTd>{el.forms}</StyledTd>
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
                <StyledTd>Identyfikator zamówienia</StyledTd>
                <StyledTd>{details.orderId}</StyledTd>
            </StyledTr>
            <StyledTr>
                <StyledTd>Data złożenia zamówienia</StyledTd>
                <StyledTd>{details.createdAt}</StyledTd>
            </StyledTr>
            <StyledTr>
                <StyledTd>Imię i Nazwisko</StyledTd>
                <StyledTd>{`${details.name} ${details.surname}`}</StyledTd>
            </StyledTr>
            <StyledTr>
                <StyledTd>Numer telefonu</StyledTd>
                <StyledTd>{details.phone}</StyledTd>
            </StyledTr>
            <StyledTr>
                <StyledTd>typ</StyledTd>
                <StyledTd>{details.maskType}</StyledTd>
            </StyledTr>
            <StyledTr>
                <StyledTd>Ilość przyłbic</StyledTd>
                <StyledTd>{details.visors}</StyledTd>
            </StyledTr>
            <StyledTr>
                <StyledTd>Ilość wydrukowanych ramek do przyłbic</StyledTd>
                <StyledTd>{details.frames}</StyledTd>
            </StyledTr>
            <StyledTr>
                <StyledTd>Ilość wyciętych formatek PET</StyledTd>
                <StyledTd>{details.forms}</StyledTd>
            </StyledTr>
            <StyledTr>
                <StyledTd>Filament PET (w kg)</StyledTd>
                <StyledTd>{details.PETFilament}</StyledTd>
            </StyledTr>
            <StyledTr>
                <StyledTd>Folie PET (w m2)</StyledTd>
                <StyledTd>{details.PETFoil}</StyledTd>
            </StyledTr>
            <StyledTr>
                <StyledTd>Nazwa jadnostki</StyledTd>
                <StyledTd>{details.unit}</StyledTd>
            </StyledTr>
            <StyledTr>
                <StyledTd>Adres jednostki</StyledTd>
                <StyledTd>{details.unitAdress}</StyledTd>
            </StyledTr>
            <StyledTr>
                <StyledTd>Imię i nazwisko osoby odbierającej zamówienie</StyledTd>
                <StyledTd>{`${details.contactName} ${details.contactSurname}`}</StyledTd>
            </StyledTr>
            <StyledTr>
                <StyledTd>Telefon do osoby odbierającej zamówienie</StyledTd>
                <StyledTd>{details.contactPhone}</StyledTd>
            </StyledTr>

        </>
    )


    const compareType = (a, b) => {
        const typeA = a.maskType.toUpperCase()
        const typeB = b.maskType.toUpperCase()

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
                <ButtonContainer>        
                    <FullButton onClick={() => sortTab('type')}>
                        Sortuj: typ
                    </FullButton>       
                    <FullButton onClick={() => sortTab('date')}>
                        Sortuj: data
                    </FullButton>
            </ButtonContainer>   
            <TableContainer>
                <StyledTable>
                    <StyledCaption>Zamówienia oczekujące na realizację</StyledCaption>
                    <StyledThead>
                        <StyledTr>
                            <StyledTh>Imię</StyledTh>
                            <StyledTh>Nazwisko</StyledTh>
                            <StyledTh>Typ</StyledTh>
                            <StyledTh>Przyłbice</StyledTh>
                            <StyledTh>Ramki do przyłbic</StyledTh>
                            <StyledTh>formatki PET</StyledTh>
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
            <ButtonContainer>
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
            </ButtonContainer>
            <TableContainer>
                <StyledTable>
                    <StyledCaption>Zrealizowane zamówienia</StyledCaption>
                    <StyledThead>
                        <StyledTr>
                            <StyledTh>Imię</StyledTh>
                            <StyledTh>Nazwisko</StyledTh>
                            <StyledTh>Przyłbice</StyledTh>
                            <StyledTh>Ramki do przyłbic</StyledTh>
                            <StyledTh>formatki PET</StyledTh>
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

        </PaneContainer>
    )
}

export default Pane;