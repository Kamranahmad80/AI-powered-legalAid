import React from 'react';
import styled from 'styled-components';

const DisclaimerContainer = styled.div`
  padding: 8px 0;
  margin-top: 10px;
  font-size: 12px;
  color: #8e8e8e;
  line-height: 1.4;
  text-align: center;
  max-width: 760px;
  margin: 10px auto 0;
`;

const DisclaimerText = styled.p`
  margin: 0;
`;

const Disclaimer = () => {
  return (
    <DisclaimerContainer>
      <DisclaimerText>
        <strong>DISCLAIMER:</strong> The information provided by this chatbot is for general informational purposes only and 
        is not intended to be legal advice. It is not a substitute for competent legal counsel from a licensed professional 
        attorney in your state or jurisdiction. Laws vary by location and are constantly changing. Nothing provided 
        here should be relied upon as legal advice or create an attorney-client relationship.
      </DisclaimerText>
    </DisclaimerContainer>
  );
};

export default Disclaimer;
