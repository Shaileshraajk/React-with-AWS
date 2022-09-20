import { Link } from 'react-router-dom';
import {StyledContainer, StyledTitle, StyledSubTitle, CopyrightText, StyledHosted} from './layout/Styles'

const Homepage = () => {
    return(
        <StyledContainer>
            <div>
            <StyledTitle size={65}>
                <b>Employee Management App</b>
            </StyledTitle>
            <StyledSubTitle size={32}>
                Built using React and SpringBoot
            </StyledSubTitle>
            <Link className='btn btn-warning' to={"/rglist"} ><h3>View Employees</h3></Link>
            <StyledHosted size={35}>
                Hosting Partner
            </StyledHosted>
            <img src={'images/Amazon-Web-Services-AWS-Logo.png'} alt='AWSlogo' height={100}/>
            
            
            <CopyrightText>
                 All rights reserved &copy; 2022
            </CopyrightText>
    
            </div>

        </StyledContainer>
    )
}

export default Homepage;