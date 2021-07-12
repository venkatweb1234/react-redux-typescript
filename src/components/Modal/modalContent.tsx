import React, { Fragment } from "react";
import {
  StyledHeader6,
  StyledParagraph,
  StyledTable,
  TBody,
  THead,
  TR,
  TH,
  TD,
  IMG,
  StyledHeader5,
  StyledParagraphCSP,
  StyledSpan,
  Button
} from "./../../_Style/allStylescomp";

interface Props {}

const MContent = (props: Props) => {
  return (
    <Fragment>
      <StyledParagraph>
        If you're feeling a little overwhelmed by the broadband choices on
        offer, we can help you find the right one for you.
      </StyledParagraph>
      <StyledTable>
        <THead>
          <TBody>
            <TR>
              <TH>
                <IMG
                  alt="Home Internet"
                  src="https://image.exacttarget.com/lib/fe9412727565007a72/m/27/new-home-image-internet.png"
                ></IMG>
                <StyledHeader5>Home Internet</StyledHeader5>
              </TH>
              <TH>
                <IMG
                  alt="5G Home Internet"
                  src="https://image.exacttarget.com/lib/fe9412727565007a72/m/27/5g-homeinternet-image.png"
                ></IMG>
                <StyledHeader5>5G Home Internet</StyledHeader5>
              </TH>
              <TH>
                <IMG
                  alt="4G Home Internet"
                  src="https://image.exacttarget.com/lib/fe9412727565007a72/m/27/4g-home-internet-image.png"
                ></IMG>
                <StyledHeader5>4G Home Internet</StyledHeader5>
              </TH>
            </TR>
            <TR>
              <TD>
                <StyledParagraphCSP>
                  Our next-gen broadband powered by 5G. Stream, game, video chat
                  and run your smart home in a whole new way.
                </StyledParagraphCSP>
              </TD>
              <TD>
                <StyledParagraphCSP>
                  Our next-gen broadband powered by 5G. Stream, game, video chat
                  and run your smart home in a whole new way.
                </StyledParagraphCSP>
              </TD>
              <TD>
                <StyledParagraphCSP>
                  Fast home internet that can move with you. No professional
                  installation or wires needed-just plug and play.
                </StyledParagraphCSP>
              </TD>
            </TR>
            <TR>
              <TD>
                <StyledHeader6 color="primary">Unlimited Data</StyledHeader6>
              </TD>
              <TD>
                <StyledHeader6 color="primary">Unlimited Data</StyledHeader6>
              </TD>
              <TD>
                <StyledHeader6 color="primary">
                  200GB / 500GB Data
                </StyledHeader6>
              </TD>
            </TR>
            <TR>
              <TD>
                <StyledSpan>N/A</StyledSpan>
              </TD>
              <TD>
                <StyledSpan>50Mbps Satisfaction Guarantee</StyledSpan>
              </TD>
              <TD>
                <StyledSpan>N/A</StyledSpan>
              </TD>
            </TR>
            <TR>
              <TD>
               <StyledHeader6 color="primary">Fixed internet</StyledHeader6>
                <StyledSpan>Relies on nbn infrastructure to connect your address to the internet.</StyledSpan>
              </TD>
              <TD>
              <StyledHeader6 color="primary">Wireless internet</StyledHeader6>
                <StyledSpan>No fixed line required for connection. Wireless internet in an Optus 5G serviceable area.</StyledSpan>
              </TD>
              <TD>
              <StyledHeader6 color="primary">Wireless internet</StyledHeader6>
                <StyledSpan>No fixed line required for connection. Wireless internet in an Optus 5G serviceable area.</StyledSpan>
              </TD>
            </TR>
            <TR>
              <TD>
               <StyledHeader6 color="primary">Modem/Router</StyledHeader6>
                <StyledSpan>Uses a router or modem to connect.</StyledSpan>
              </TD>
              <TD>
              <StyledHeader6 color="primary">Modem</StyledHeader6>
                <StyledSpan>Uses a router or modem to connect.</StyledSpan>
              </TD>
              <TD>
              <StyledHeader6 color="primary">Modem</StyledHeader6>
                <StyledSpan>Uses a router or modem to connect.</StyledSpan>
              </TD>
            </TR>
            <TR>
              <TD>
                <Button>See Plans</Button>
              </TD>
              <TD>
                <Button>See Plans</Button>
              </TD>
              <TD>
                <Button>See Plans</Button>
              </TD>
            </TR>
          </TBody>
        </THead>
      </StyledTable>
    </Fragment>
  );
};

export default MContent;
