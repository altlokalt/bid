import React from "react";

import {
  Img,
  Text,
  Input,
  Button,
  List,
  CheckBox,
  SelectBox,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images";

const ConfirmTermsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-black_900 flex flex-col font-montserrat items-center justify-end mx-[auto] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-gray_900 border-b-[1px] border-gray_901 border-solid flex md:flex-col flex-row md:gap-[20px] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
            <div className="header-row my-[4px]">
              <div className="flex flex-row items-center justify-center sm:pr-[20px] pr-[27px]">
                <Img
                  src="images/img_grid.svg"
                  className="h-[32px] rounded-[50%] w-[32px]"
                  alt="grid"
                />
                <Img
                  src="images/img_file.svg"
                  className="h-[19px] ml-[5px] w-[auto]"
                  alt="file"
                />
              </div>
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-row sm:hidden items-start justify-start md:ml-[0] ml-[55px] w-[auto]">
              <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] w-[auto]">
                <div className="flex items-center justify-start w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Marketplace
                  </Text>
                </div>
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[20px] w-[20px]"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] w-[auto]">
                <div className="flex items-center justify-start w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Resources
                  </Text>
                </div>
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[20px] w-[20px]"
                  alt="arrowdown One"
                />
              </div>
            </div>
            <div className="flex sm:flex-1 sm:hidden items-start justify-start md:ml-[0] ml-[222px] sm:w-[100%] w-[356px]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                wrapClassName="bg-gray_901 flex gap-[8px] px-[16px] py-[8px] w-[100%]"
                name="InputNoLabel"
                placeholder="Collection, item or User"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer mr-[8px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#7c876e"
                      className="cursor-pointer ml-[10px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
            </div>
            <div className="flex flex-row gap-[16px] sm:hidden items-start justify-start md:ml-[0] ml-[21px] w-[auto]">
              <ul className="flex sm:flex-col flex-row gap-[8px] sm:hidden items-start justify-start w-[auto] common-row-list">
                <li className="sm:w-[100%] sm:my-[10px] w-[10%]">
                  <Button className="flex h-[40px] items-center justify-center p-[8px] rounded-[12px]">
                    <Img
                      src="images/img_minimize_5.svg"
                      className=""
                      alt="minimize"
                    />
                  </Button>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[10%]">
                  <Button className="flex h-[40px] items-center justify-center p-[8px] rounded-[12px]">
                    <Img
                      src="images/img_bellnotification.svg"
                      className=""
                      alt="bellnotification"
                    />
                  </Button>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] text-center">
                  <Button
                    className="bg-gray_901 flex items-center justify-center min-w-[140px] px-[16px] py-[8px] rounded-[20px] text-center w-[auto]"
                    leftIcon={
                      <Img
                        src="images/img_close.svg"
                        className="mr-[4px] text-center"
                        alt="close"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-bold text-[14px] text-left text-white_A700">
                      BNB Chain
                    </div>
                  </Button>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] text-center">
                  <Button className="bg-lime_A400 cursor-pointer font-bold px-[16px] py-[8px] rounded-[20px] text-[14px] text-black_900 text-center">
                    Create NFT
                  </Button>
                </li>
              </ul>
              <Img
                src="images/img_arrowleft_gray_902.svg"
                className="h-[40px] w-[40px]"
                alt="arrowleft"
              />
            </div>
          </div>
        </header>
        <div className="md:h-[5022px] h-[5062px] md:px-[20px] relative w-[100%]">
          <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
            <div className="flex flex-col gap-[180px] md:gap-[40px] items-center justify-start w-[100%]">
              <div className="flex flex-col md:gap-[40px] gap-[80px] items-center justify-start md:w-[100%] w-[91%]">
                <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:w-[100%] w-[49%]">
                    <div className="flex h-[560px] sm:h-[auto] items-center justify-start sm:w-[100%] w-[560px]">
                      <div className="bg-gray_903 h-[560px] w-[560px]"></div>
                    </div>
                    <div className="bg-gray_900 flex flex-col gap-[24px] items-start justify-start max-w-[740px] p-[40px] sm:px-[20px] w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                        <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_600 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Price
                          </Text>
                          <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                            <Text
                              className="text-left text-white_A700 w-[auto]"
                              as="h2"
                              variant="h2"
                            >
                              1.12 BUSD
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_600 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              $ 366.86
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_600 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Auction ends in
                          </Text>
                          <List
                            className="sm:flex-col flex-row gap-[24px] grid grid-cols-3 justify-start w-[265px]"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                              <Text
                                className="text-left text-white_A700 w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                00
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                hrs
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                              <Text
                                className="text-left text-white_A700 w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                24
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                mins
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                              <Text
                                className="h-[30px] text-left text-white_A700 w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                26
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                secs
                              </Text>
                            </div>
                          </List>
                        </div>
                      </div>
                      <Button className="bg-lime_A400 cursor-pointer font-bold p-[16px] rounded-[28px] text-[16px] text-black_900 text-center w-[100%]">
                        Bid
                      </Button>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:w-[100%] w-[49%]">
                    <div className="flex flex-col gap-[24px] items-start justify-start max-w-[740px] w-[100%]">
                      <Text
                        className="text-left text-white_A700 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        Car-Free City
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-[140px] sm:gap-[40px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[168px]">
                          <Img
                            src="images/img_arrowleft_gray_902.svg"
                            className="h-[56px] w-[56px]"
                            alt="arrowleft One"
                          />
                          <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                            <Text
                              className="not-italic text-gray_600 text-left w-[auto]"
                              variant="body1"
                            >
                              Collection
                            </Text>
                            <CheckBox
                              className="font-semibold text-[16px] text-left text-white_A700"
                              inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                              label="Abstract"
                              name="Abstract"
                            ></CheckBox>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_arrowleft_gray_902.svg"
                            className="h-[56px] w-[56px]"
                            alt="arrowleft Two"
                          />
                          <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                            <Text
                              className="not-italic text-gray_600 text-left w-[auto]"
                              variant="body1"
                            >
                              Owner
                            </Text>
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-semibold text-left text-white_A700 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                0xhg34...nGj2
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[740px] not-italic text-gray_600 text-left"
                        as="h6"
                        variant="h6"
                      >
                        Breathing Space joyfully brings the unique blend of
                        DeFi, Collect-to-Earn and Play-to-Earn Abstract is known
                        for to the Neo N3 ecosystem: the most feature-complete
                        blockchain platform for building decentralized
                        applications for the smart economy of tomorrow.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[24px] h-[594px] md:h-[auto] items-start justify-start max-w-[740px] w-[100%]">
                      <div className="bg-gray_900 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[4px] md:w-[100%] w-[610px]">
                        <List
                          className="sm:flex-col flex-row gap-[1px] grid grid-cols-2 md:w-[100%] w-[50%]"
                          orientation="horizontal"
                        >
                          <div className="flex items-center justify-center px-[16px] py-[8px] rounded-[8px] w-[100%]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Attributes
                            </Text>
                          </div>
                          <div className="flex items-center justify-center px-[16px] py-[8px] rounded-[8px] w-[100%]">
                            <Text
                              className="font-semibold text-gray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Offers
                            </Text>
                          </div>
                        </List>
                        <Button className="bg-white_A700 cursor-pointer font-semibold px-[16px] py-[8px] text-[16px] text-center text-gray_901 w-[100%]">
                          Bids
                        </Button>
                        <div className="flex items-center justify-center px-[16px] py-[8px] rounded-[8px] w-[100%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Info
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray_900 flex flex-col gap-[24px] h-[100%] items-start justify-between p-[24px] sm:px-[20px] w-[100%]">
                        <List
                          className="flex-col gap-[24px] grid items-start w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-row sm:gap-[40px] items-start justify-between my-[0] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-start py-[2px] w-[auto]">
                              <Img
                                src="images/img_volume.svg"
                                className="h-[40px] w-[40px]"
                                alt="volume"
                              />
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Cimmy
                                </Text>
                                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    0.83 BLC
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    ($ 366.86)
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[16px] items-start justify-start w-[auto]">
                              <div className="flex flex-col gap-[8px] items-end justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-left text-light_blue_A400 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Lead
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  5 minutes ago
                                </Text>
                              </div>
                              <Img
                                src="images/img_sharedirect.svg"
                                className="h-[24px] w-[24px]"
                                alt="sharedirect"
                              />
                            </div>
                          </div>
                          <div className="flex flex-1 flex-row sm:gap-[40px] items-start justify-between my-[0] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-start py-[2px] w-[auto]">
                              <Img
                                src="images/img_volume.svg"
                                className="h-[40px] w-[40px]"
                                alt="volume One"
                              />
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  TheElerKing
                                </Text>
                                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    0.935 BUSD
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    ($ 349.18)
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[16px] items-start justify-start w-[auto]">
                              <div className="flex flex-col gap-[8px] items-end justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-deep_orange_300 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Outbidded
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  1 hours ago
                                </Text>
                              </div>
                              <Img
                                src="images/img_sharedirect.svg"
                                className="h-[24px] w-[24px]"
                                alt="sharedirect One"
                              />
                            </div>
                          </div>
                          <div className="flex flex-1 flex-row sm:gap-[40px] items-start justify-between my-[0] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-start py-[2px] w-[auto]">
                              <Img
                                src="images/img_volume.svg"
                                className="h-[40px] w-[40px]"
                                alt="volume Two"
                              />
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0xgj32...el21
                                </Text>
                                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    0.85 BUSD
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    ($ 331.5)
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[16px] items-start justify-start w-[auto]">
                              <div className="flex flex-col gap-[8px] items-end justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-deep_orange_300 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Outbidded
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  4 hours ago
                                </Text>
                              </div>
                              <Img
                                src="images/img_sharedirect.svg"
                                className="h-[24px] w-[24px]"
                                alt="sharedirect Two"
                              />
                            </div>
                          </div>
                          <div className="flex flex-1 flex-row sm:gap-[40px] items-start justify-between my-[0] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-start py-[2px] w-[auto]">
                              <Img
                                src="images/img_volume.svg"
                                className="h-[40px] w-[40px]"
                                alt="volume Three"
                              />
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  TheElerKing
                                </Text>
                                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    0.77 BUSD
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    ($ 318.24)
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[16px] items-start justify-start w-[auto]">
                              <div className="flex flex-col gap-[8px] items-end justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-deep_orange_300 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Outbidded
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  5 hours ago
                                </Text>
                              </div>
                              <Img
                                src="images/img_sharedirect.svg"
                                className="h-[24px] w-[24px]"
                                alt="sharedirect Three"
                              />
                            </div>
                          </div>
                          <div className="flex flex-1 flex-row sm:gap-[40px] items-start justify-between my-[0] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-start py-[2px] w-[auto]">
                              <Img
                                src="images/img_volume.svg"
                                className="h-[40px] w-[40px]"
                                alt="volume Four"
                              />
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0xgj32...el21
                                </Text>
                                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    0.7 BUSD
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    ($ 309.4)
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[16px] items-start justify-start w-[auto]">
                              <div className="flex flex-col gap-[8px] items-end justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-deep_orange_300 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Outbidded
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7 hours ago
                                </Text>
                              </div>
                              <Img
                                src="images/img_sharedirect.svg"
                                className="h-[24px] w-[24px]"
                                alt="sharedirect Four"
                              />
                            </div>
                          </div>
                        </List>
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_600 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            You can
                          </Text>
                          <div className="flex items-center justify-start py-[16px] rounded-[12px] w-[auto]">
                            <Text
                              className="font-bold text-left text-lime_A400 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Report any problem
                            </Text>
                          </div>
                          <Text
                            className="font-normal not-italic text-gray_600 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            you find.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[40px] items-start justify-start md:w-[100%] w-[auto]">
                  <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1520px] w-[100%]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Activities
                    </Text>
                    <div className="flex sm:flex-1 items-start justify-start sm:w-[100%] w-[260px]">
                      <SelectBox
                        className="bg-gray_901 font-semibold px-[16px] py-[12px] text-[14px] text-left text-white_A700 w-[100%]"
                        placeholderClassName="text-white_A700"
                        name="dropdown"
                        placeholder="All"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_white_a700.svg"
                            className="h-[24px] w-[24px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </div>
                  </div>
                  <div className="bg-gray_900 flex flex-col gap-[40px] items-center justify-start max-w-[1520px] pb-[40px] pt-[24px] sm:px-[20px] px-[24px] w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                      <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                        <div className="bg-gray_900 border-b-[1px] border-gray_200 border-solid flex h-[56px] md:h-[auto] items-center justify-start p-[16px] w-[100%]">
                          <Text
                            className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[148px] not-italic text-gray_600 text-left"
                            as="h6"
                            variant="h6"
                          >
                            Type
                          </Text>
                        </div>
                        <List
                          className="flex-col gap-[16px] grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="bg-gray_900 flex flex-1 items-center justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[100%]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Bid & Offer
                              </Text>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                Bidded
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-center justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[100%]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Bid & Offer
                              </Text>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                Bidded
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-center justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[100%]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Bid & Offer
                              </Text>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                Bidded
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-center justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[100%]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Bid & Offer
                              </Text>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                Bidded
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-center justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[100%]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Bid & Offer
                              </Text>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                Bidded
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-center justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[100%]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Bid & Offer
                              </Text>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                Bidded
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-center justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[100%]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Listing
                              </Text>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                As auction
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-center justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[100%]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Listing
                              </Text>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                Cancel
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-center justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[100%]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Bid & Offer
                              </Text>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                Buy offer
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-center justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[100%]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Listing
                              </Text>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                As auction
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                      <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                        <div className="bg-gray_900 border-b-[1px] border-gray_200 border-solid flex h-[56px] md:h-[auto] items-center justify-start p-[16px] w-[100%]">
                          <Text
                            className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[328px] not-italic text-gray_600 text-left"
                            as="h6"
                            variant="h6"
                          >
                            Items
                          </Text>
                        </div>
                        <List
                          className="flex-col gap-[16px] grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[8px] w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <div className="bg-gray_903 h-[48px] w-[48px]"></div>
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-center text-gray_600 w-[auto]"
                                    variant="body1"
                                  >
                                    Doodle Apes
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-center text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Car-Free City
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[8px] w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <div className="bg-gray_903 h-[48px] w-[48px]"></div>
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-center text-gray_600 w-[auto]"
                                    variant="body1"
                                  >
                                    Doodle Apes
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-center text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Car-Free City
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[8px] w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <div className="bg-gray_903 h-[48px] w-[48px]"></div>
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-center text-gray_600 w-[auto]"
                                    variant="body1"
                                  >
                                    Doodle Apes
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-center text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Car-Free City
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[8px] w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <div className="bg-gray_903 h-[48px] w-[48px]"></div>
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-center text-gray_600 w-[auto]"
                                    variant="body1"
                                  >
                                    Doodle Apes
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-center text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Car-Free City
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[8px] w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <div className="bg-gray_903 h-[48px] w-[48px]"></div>
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-center text-gray_600 w-[auto]"
                                    variant="body1"
                                  >
                                    Doodle Apes
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-center text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Car-Free City
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[8px] w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <div className="bg-gray_903 h-[48px] w-[48px]"></div>
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-center text-gray_600 w-[auto]"
                                    variant="body1"
                                  >
                                    Doodle Apes
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-center text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Car-Free City
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[8px] w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <div className="bg-gray_903 h-[48px] w-[48px]"></div>
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-center text-gray_600 w-[auto]"
                                    variant="body1"
                                  >
                                    Doodle Apes
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-center text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Car-Free City
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[8px] w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <div className="bg-gray_903 h-[48px] w-[48px]"></div>
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-center text-gray_600 w-[auto]"
                                    variant="body1"
                                  >
                                    Doodle Apes
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-center text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Car-Free City
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[8px] w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <div className="bg-gray_903 h-[48px] w-[48px]"></div>
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-center text-gray_600 w-[auto]"
                                    variant="body1"
                                  >
                                    Doodle Apes
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-center text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Car-Free City
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[8px] w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <div className="bg-gray_903 h-[48px] w-[48px]"></div>
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-center text-gray_600 w-[auto]"
                                    variant="body1"
                                  >
                                    Doodle Apes
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-center text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Car-Free City
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                      <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                        <div className="bg-gray_900 border-b-[1px] border-gray_200 border-solid flex h-[56px] md:h-[auto] items-center justify-start p-[16px] w-[100%]">
                          <Text
                            className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-gray_600 text-left"
                            as="h6"
                            variant="h6"
                          >
                            Price
                          </Text>
                        </div>
                        <List
                          className="flex-col gap-[16px] grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[auto]">
                              <div className="flex flex-row gap-[4px] items-start justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.65
                                </Text>
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  BUSD
                                </Text>
                              </div>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                $ 366.86
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[auto]">
                              <div className="flex flex-row gap-[4px] items-start justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.61
                                </Text>
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  BUSD
                                </Text>
                              </div>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                $ 349.18
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[auto]">
                              <div className="flex flex-row gap-[4px] items-start justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.61
                                </Text>
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  BUSD
                                </Text>
                              </div>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                $ 331.54
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[auto]">
                              <div className="flex flex-row gap-[4px] items-start justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.55
                                </Text>
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  BUSD
                                </Text>
                              </div>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                $ 318.24
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[auto]">
                              <div className="flex flex-row gap-[4px] items-start justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.55
                                </Text>
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  BUSD
                                </Text>
                              </div>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                $ 309.45
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[auto]">
                              <div className="flex flex-row gap-[4px] items-start justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.56
                                </Text>
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  BUSD
                                </Text>
                              </div>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                $ 265.22
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[auto]">
                              <div className="flex flex-row gap-[4px] items-start justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.43
                                </Text>
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  BUSD
                                </Text>
                              </div>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                $ 397.85
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray_900 flex flex-1 items-start justify-start px-[16px] py-[12px] w-[100%]">
                            <div className="flex flex-col items-start justify-start w-[auto]">
                              <div className="flex flex-row gap-[4px] items-start justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.42
                                </Text>
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  BUSD
                                </Text>
                              </div>
                              <Text
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body1"
                              >
                                $ 442.00
                              </Text>
                            </div>
                          </div>
                        </List>
                        <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                          <Text
                            className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                            as="h6"
                            variant="h6"
                          >
                            -
                          </Text>
                        </div>
                        <div className="bg-gray_900 flex items-start justify-start px-[16px] py-[12px] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row gap-[4px] items-start justify-start w-[100%]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                0.42
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                BUSD
                              </Text>
                            </div>
                            <Text
                              className="not-italic text-gray_500 text-left w-[auto]"
                              variant="body1"
                            >
                              $ 331.55
                            </Text>
                          </div>
                        </div>
                      </div>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[44%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                          <div className="bg-gray_900 border-b-[1px] border-gray_200 border-solid flex h-[56px] md:h-[auto] items-center justify-start p-[16px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-gray_600 text-left"
                              as="h6"
                              variant="h6"
                            >
                              From
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              Cimmy
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              TheElerking
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              0xgj32...el21
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              TheElerking
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              0xgj32...el21
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              0xhg34...nGj2
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              TheElerking
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              TheElerking
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              TheElerking
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              TheElerking
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                          <div className="bg-gray_900 border-b-[1px] border-gray_200 border-solid flex h-[56px] md:h-[auto] items-center justify-start p-[16px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-gray_600 text-left"
                              as="h6"
                              variant="h6"
                            >
                              To
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              0xhg34...nGj2
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              0xhg34...nGj2
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              0xhg34...nGj2
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              0xhg34...nGj2
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              0xhg34...nGj2
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              -
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              -
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              -
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              0xhg34...nGj2
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              0xhg34...nGj2
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                          <div className="bg-gray_900 border-b-[1px] border-gray_200 border-solid flex h-[56px] md:h-[auto] items-center justify-start p-[16px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-gray_600 text-left"
                              as="h6"
                              variant="h6"
                            >
                              Date
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              5 minutes ago
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              1 hours ago
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              4 hours ago
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              5 hours ago
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              7 hours ago
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-gray_600 text-left"
                              as="h6"
                              variant="h6"
                            >
                              A day ago
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-gray_600 text-left"
                              as="h6"
                              variant="h6"
                            >
                              3 days ago
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-gray_600 text-left"
                              as="h6"
                              variant="h6"
                            >
                              3 days ago
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              3 days ago
                            </Text>
                          </div>
                          <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                            <Text
                              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[181px] not-italic text-left text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              3 days ago
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                        <div className="bg-gray_900 border-b-[1px] border-gray_200 border-solid h-[56px] p-[16px] w-[100%]"></div>
                        <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                          <Img
                            src="images/img_sharedirect.svg"
                            className="h-[24px] w-[24px]"
                            alt="sharedirect Five"
                          />
                        </div>
                        <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                          <Img
                            src="images/img_sharedirect.svg"
                            className="h-[24px] w-[24px]"
                            alt="sharedirect Six"
                          />
                        </div>
                        <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                          <Img
                            src="images/img_sharedirect.svg"
                            className="h-[24px] w-[24px]"
                            alt="sharedirect Seven"
                          />
                        </div>
                        <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                          <Img
                            src="images/img_sharedirect.svg"
                            className="h-[24px] w-[24px]"
                            alt="sharedirect Eight"
                          />
                        </div>
                        <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                          <Img
                            src="images/img_sharedirect.svg"
                            className="h-[24px] w-[24px]"
                            alt="sharedirect Nine"
                          />
                        </div>
                        <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                          <Img
                            src="images/img_sharedirect.svg"
                            className="h-[24px] w-[24px]"
                            alt="sharedirect Ten"
                          />
                        </div>
                        <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                          <Img
                            src="images/img_sharedirect.svg"
                            className="h-[24px] w-[24px]"
                            alt="sharedirect Eleven"
                          />
                        </div>
                        <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                          <Img
                            src="images/img_sharedirect.svg"
                            className="h-[24px] w-[24px]"
                            alt="sharedirect Twelve"
                          />
                        </div>
                        <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                          <Img
                            src="images/img_sharedirect.svg"
                            className="h-[24px] w-[24px]"
                            alt="sharedirect Thirteen"
                          />
                        </div>
                        <div className="bg-gray_900 flex items-center justify-start px-[16px] py-[20px] w-[100%]">
                          <Img
                            src="images/img_sharedirect.svg"
                            className="h-[24px] w-[24px]"
                            alt="sharedirect Fourteen"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start w-[auto]">
                      <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                        <Button className="border-[1px] border-bluegray_900 border-solid flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_arrowleft.svg"
                            className="h-[24px]"
                            alt="arrowleft Three"
                          />
                        </Button>
                        <div className="border-[1px] border-lime_A400 border-solid flex h-[40px] items-center justify-start py-[8px] rounded-[50%] w-[40px]">
                          <Text
                            className="font-semibold leading-[24.00px] text-center text-lime_A400 w-[100%]"
                            as="h6"
                            variant="h6"
                          >
                            1
                          </Text>
                        </div>
                        <div className="border-[1px] border-bluegray_900 border-solid flex h-[40px] items-center justify-start py-[8px] rounded-[50%] w-[40px]">
                          <Text
                            className="font-semibold leading-[24.00px] text-center text-white_A700 w-[100%]"
                            as="h6"
                            variant="h6"
                          >
                            2
                          </Text>
                        </div>
                        <Button className="border-[1px] border-bluegray_900 border-solid flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_arrowright.svg"
                            className="h-[24px]"
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="flex-col md:gap-[40px] gap-[80px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-[40px] items-start justify-start max-w-[1520px] w-[100%]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      More from Doodle Apes{" "}
                    </Text>
                    <div className="flex flex-col md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
                      <div className="gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-[100%]">
                        <div className="bg-gray_900 flex flex-1 flex-col items-center justify-start w-[100%]">
                          <div className="bg-gray_903 h-[350px] w-[350px]"></div>
                          <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Doodle Apes{" "}
                                  </Text>
                                </div>
                                <Img
                                  src="images/img_close.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="close"
                                />
                              </div>
                              <div className="flex items-center justify-start w-[100%]">
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  Car-Free City
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-gray_903 h-[1px] w-[100%]" />
                            <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                              <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                                <Text
                                  className="not-italic text-gray_600 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Current bid
                                </Text>
                                <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    0.75 BUSD
                                  </Text>
                                  <Img
                                    src="images/img_lightbulb.svg"
                                    className="h-[24px] w-[24px]"
                                    alt="lightbulb"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                                <Text
                                  className="not-italic text-gray_600 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Ends in
                                </Text>
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    01 : 29 : 35
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start w-[100%]">
                          <div className="bg-gray_903 h-[350px] w-[350px]"></div>
                          <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Doodle Apes{" "}
                                  </Text>
                                </div>
                                <Img
                                  src="images/img_close.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="close One"
                                />
                              </div>
                              <div className="flex items-center justify-start w-[100%]">
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  White car
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-gray_903 h-[1px] w-[100%]" />
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                              <Text
                                className="not-italic text-gray_600 text-left w-[auto]"
                                variant="body1"
                              >
                                Price
                              </Text>
                              <Text
                                className="font-semibold text-left text-white_A700 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                0.75 BUSD
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start w-[100%]">
                          <div className="bg-gray_903 h-[350px] w-[350px]"></div>
                          <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Doodle Apes{" "}
                                  </Text>
                                </div>
                                <Img
                                  src="images/img_close.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="close Two"
                                />
                              </div>
                              <div className="flex items-center justify-start w-[100%]">
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  Green car
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-gray_903 h-[1px] w-[100%]" />
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                              <Text
                                className="not-italic text-gray_600 text-left w-[auto]"
                                variant="body1"
                              >
                                Price
                              </Text>
                              <Text
                                className="font-semibold text-left text-white_A700 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                0.75 BUSD
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start w-[100%]">
                          <div className="bg-gray_903 h-[350px] w-[350px]"></div>
                          <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Doodle Apes{" "}
                                  </Text>
                                </div>
                                <Img
                                  src="images/img_close.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="close Three"
                                />
                              </div>
                              <div className="flex items-center justify-start w-[100%]">
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  Gold car
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-gray_903 h-[1px] w-[100%]" />
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                              <Text
                                className="not-italic text-gray_600 text-left w-[auto]"
                                variant="body1"
                              >
                                Price
                              </Text>
                              <Text
                                className="font-semibold text-left text-white_A700 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                0.75 BUSD
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button className="border-[1px] border-lime_A400 border-solid cursor-pointer font-bold p-[16px] rounded-[28px] text-[16px] text-center text-lime_A400 w-[220px]">
                        View More
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[40px] items-start justify-start max-w-[1520px] w-[100%]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      More from the seller
                    </Text>
                    <div className="flex flex-col md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
                      <div className="gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-[100%]">
                        <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start w-[100%]">
                          <div className="bg-gray_903 h-[350px] w-[350px]"></div>
                          <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Doodle Apes{" "}
                                  </Text>
                                </div>
                                <Img
                                  src="images/img_close.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="close One"
                                />
                              </div>
                              <div className="flex items-center justify-start w-[100%]">
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  Wheel
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-gray_903 h-[1px] w-[100%]" />
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                              <Text
                                className="not-italic text-gray_600 text-left w-[auto]"
                                variant="body1"
                              >
                                Price
                              </Text>
                              <Text
                                className="font-semibold text-left text-white_A700 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                0.75 BUSD
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start w-[100%]">
                          <div className="bg-gray_903 h-[350px] w-[350px]"></div>
                          <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Doodle Apes{" "}
                                  </Text>
                                </div>
                                <Img
                                  src="images/img_close.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="close One One"
                                />
                              </div>
                              <div className="flex items-center justify-start w-[100%]">
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  Green car
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-gray_903 h-[1px] w-[100%]" />
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                              <Text
                                className="not-italic text-gray_600 text-left w-[auto]"
                                variant="body1"
                              >
                                Price
                              </Text>
                              <Text
                                className="font-semibold text-left text-white_A700 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                0.75 BUSD
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start w-[100%]">
                          <div className="bg-gray_903 h-[350px] w-[350px]"></div>
                          <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Doodle Apes{" "}
                                  </Text>
                                </div>
                                <Img
                                  src="images/img_close.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="close Two One"
                                />
                              </div>
                              <div className="flex items-center justify-start w-[100%]">
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  Car-Free City
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-gray_903 h-[1px] w-[100%]" />
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                              <Text
                                className="not-italic text-gray_600 text-left w-[auto]"
                                variant="body1"
                              >
                                Price
                              </Text>
                              <Text
                                className="font-semibold text-left text-white_A700 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                0.75 BUSD
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start w-[100%]">
                          <div className="bg-gray_903 h-[350px] w-[350px]"></div>
                          <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Doodle Apes{" "}
                                  </Text>
                                </div>
                                <Img
                                  src="images/img_close.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="close Three One"
                                />
                              </div>
                              <div className="flex items-center justify-start w-[100%]">
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  Gold car
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-gray_903 h-[1px] w-[100%]" />
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                              <Text
                                className="not-italic text-gray_600 text-left w-[auto]"
                                variant="body1"
                              >
                                Price
                              </Text>
                              <Text
                                className="font-semibold text-left text-white_A700 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                0.75 BUSD
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button className="border-[1px] border-lime_A400 border-solid cursor-pointer font-bold p-[16px] rounded-[28px] text-[16px] text-center text-lime_A400 w-[220px]">
                        View More
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-gray_900 flex flex-col gap-[40px] items-center justify-center max-w-[1680px] py-[180px] w-[100%]">
                  <Text
                    className="text-center text-white_A700 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Get the latest LABS updates
                  </Text>
                  <div className="flex items-start justify-start sm:w-[100%] w-[530px]">
                    <div className="bg-gray_901 flex sm:flex-col flex-row gap-[8px] items-start justify-start px-[16px] py-[20px] w-[100%]">
                      <Text
                        className="flex-1 font-normal leading-[24.00px] md:max-w-[100%] max-w-[466px] not-italic text-gray_600 text-left"
                        as="h6"
                        variant="h6"
                      >
                        Your Email
                      </Text>
                      <Img
                        src="images/img_arrowright_white_a700.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-black_900 flex items-center justify-end p-[40px] sm:px-[20px] w-[100%]">
                  <div className="flex flex-col items-start justify-start mt-[140px] md:w-[100%] w-[95%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[96%]">
                      <div className="flex flex-col md:gap-[40px] gap-[80px] items-start justify-start md:w-[100%] w-[17%]">
                        <div className="flex flex-row gap-[9px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[49px] w-[100%]">
                          <Img
                            src="images/img_grid.svg"
                            className="h-[58px] rounded-[50%] w-[58px]"
                            alt="grid One"
                          />
                          <Img
                            src="images/img_labs.svg"
                            className="h-[35px] w-[auto]"
                            alt="LABS"
                          />
                        </div>
                        <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-center text-white_A700 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Join LABS community
                          </Text>
                          <div className="flex flex-row gap-[24px] items-start justify-start w-[auto]">
                            <Img
                              src="images/img_icontwitter.svg"
                              className="h-[40px] w-[40px]"
                              alt="icontwitter"
                            />
                            <Img
                              src="images/img_send.svg"
                              className="h-[40px] w-[40px]"
                              alt="send"
                            />
                            <Img
                              src="images/img_rewind.svg"
                              className="h-[40px] w-[40px]"
                              alt="rewind"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[275px] w-[auto]">
                        <Text
                          className="text-left text-white_A700 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Marketplace
                        </Text>
                        <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_600 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Home
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_600 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Explore
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_600 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Activities
                          </Text>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[281px] md:gap-[40px] grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[259px] md:w-[100%] w-[38%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
                          <Text
                            className="text-left text-white_A700 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Resources
                          </Text>
                          <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_600 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Help Center
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_600 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              FAQ
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
                          <Text
                            className="text-left text-white_A700 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Links
                          </Text>
                          <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_600 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Privacy Policy
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_600 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Terms of Service
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                    <Line className="bg-gray_800 h-[1px] mt-[160px] w-[100%]" />
                    <Text
                      className="font-normal md:ml-[0] ml-[3px] mt-[23px] not-italic text-gray_600 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      © LABS, Inc. All rights reserved.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-black_900_5b flex inset-x-[0] items-center justify-start mx-[auto] p-[335px] sm:px-[20px] md:px-[40px] top-[0] w-[100%]">
            <div className="flex items-center justify-start md:w-[100%] w-[48%]">
              <div className="bg-black_900 flex flex-col gap-[24px] items-start justify-start pb-[32px] pt-[24px] sm:px-[20px] px-[24px] rounded-[12px] sm:w-[100%] w-[480px]">
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Confirm Terms
                  </Text>
                  <Img
                    src="images/img_close_white_a700.svg"
                    className="h-[24px] w-[24px]"
                    alt="close Two"
                  />
                </div>
                <Text
                  className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[432px] not-italic text-gray_600 text-left"
                  as="h6"
                  variant="h6"
                >
                  <span className="text-gray_600 text-[14px] font-montserrat">
                    You must confirm the{" "}
                  </span>
                  <span className="text-lime_A400 text-[14px] font-montserrat font-semibold">
                    Terms and Conditions
                  </span>
                  <span className="text-gray_600 text-[14px] font-montserrat">
                    {" "}
                    before trading on the marketplace.
                  </span>
                </Text>
                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_computer.svg"
                    className="h-[24px] w-[24px]"
                    alt="computer"
                  />
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Don’t ask again
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                  <Button className="border-[1px] border-lime_A400 border-solid cursor-pointer flex-1 font-bold p-[16px] rounded-[28px] text-[16px] text-center text-lime_A400 w-[100%]">
                    Cancel
                  </Button>
                  <Button className="bg-lime_A400 cursor-pointer flex-1 font-bold p-[16px] rounded-[28px] text-[16px] text-black_900 text-center w-[100%]">
                    Accept
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmTermsPage;
