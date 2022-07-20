import React from "react";
import BulletPoint from "../module/BulletPoint";
import CustomText from "../module/CustomText";

export default function Industrial() {
  return (
    <div style={{ padding: "75px 0" }}>
      <div>
        <BulletPoint text={"교육목표와 인재상"} color={"#00b0ec"} />
        <div style={{ marginTop: 30 }}>
          <CustomText
            msg="리빙디자인은 인간의 삶을 구성하는 생활환경에서 필요한 제품과 서비스를 기획하고 디자인하는 과정과 방법을 배우는 전공입니다. 인간의 행복한 삶을 위하여 필요한 것들을"
            fontType="light"
            props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
          />
          <CustomText
            msg="일상생활로부터 탐색하여 발굴하여 창의적으로 디자인을 구상하는 '콘셉트 메이킹(Concept Making)'과 아이디어 스케치, 디지털 모델링과 렌더링,"
            fontType="light"
            props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
          />
          <CustomText
            msg="3D프린팅과 같이 창조적으로 결과물을 구체적으로 표현하는 시각화(Visualzation)하는 능력을 배움으로 미래 생활환경을 선도할 수 있는 전문디자이너 양성을 교육목표로 합니다."
            fontType="light"
            props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
          />
        </div>
      </div>
      <div style={{ marginTop: 62 }}>
        <BulletPoint text={"특화전공 및 학위연계"} color={"#00b0ec"} />
        <div className="visual-first-chart">
          <div>
            <div>
              <CustomText
                msg={"라이프스타일 디자인"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
            <div>
              <CustomText
                msg={"일상생활 속의 사람들의 기호, 삶의 방식, 트렌드,"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"대중문화 등에 대한 고찰을 통하여 생활공예, 소품과 가구"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"등을 디자인하여 우리의 삶의 질을 높일 수 있는"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"생활공간을 연출하는 트렌드세터 양성 / 일상생활 속"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"소품, 가구, 홈데코 등 행복한 삶의 구성요소를 디자인하기"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"위한 트렌드와 라이프스타일의 흐름을 읽어 개념화와"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"시각화 하는 교과목 구성"}
                fontType={"light"}
                props={{ style: { fontSize: 20, marginBottom: 43 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <CustomText
                    msg={"- 제품디자인"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 라이프스타일디자인"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 가구디자인스튜디오"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 디스플레이"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                </div>
                <div style={{ marginLeft: 42 }}>
                  <CustomText
                    msg={"- 홈데코레이션"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 생활공예디자인"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 패키지디자인"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 디자인조사방법"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <CustomText
                msg={"4차산업디자인"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
            <div>
              <CustomText
                msg={"IOT, 로봇, AI, 빅데이터, 공유경제 등 첨단산업에"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"필요로 하는 제품과 서비스를 기획(Planing),"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"디자인(Design), 관리(Management)할 수 있는"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"실무적 지식과 방법을 가진 디자이너 양성"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"4차 산업혁명, 디지털 트랜스포메이션 시대의 제품 서비스"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"디자인을 위한 산업의 변화와 인간의 요구를 읽어"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"개념화와 시각화를 하는 교과목 구성"}
                fontType={"light"}
                props={{ style: { fontSize: 20, marginBottom: 43 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <CustomText
                    msg={"- 제품디자인"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 3D프린팅&모델링"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 인터페이스디자인"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 차산업디자인"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                </div>
                <div style={{ marginLeft: 42 }}>
                  <CustomText
                    msg={"- 디자인조사방법"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 디자인매니지먼트"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 기계요소디자인"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 사물인터넷"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <CustomText
                msg={"디자인창업"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
            <div>
              <CustomText
                msg={"일상생활에 필요한 제품을 창의적인 아이디어를 통해"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"디자인하고 이를 상품으로 제작하여 생산, 유통할 수 있는"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"기업을 창업하고 운영하는 과정과 방법을 가진 비즈니스"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"디자이너 양성 / 우리 일상의 트렌드와 라이프스타일의"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"흐름을 읽어 창의적인 아이디어를 상품으로 기획하고"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"생산 및 유통하기 위한 개념화와 시각화 하는"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"교과목 구성"}
                fontType={"light"}
                props={{ style: { fontSize: 20, marginBottom: 43 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <CustomText
                    msg={"- 제품디자인"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 창의벤처디자인"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 디자인조사방법"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 디자인과마케팅"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                </div>
                <div style={{ marginLeft: 42 }}>
                  <CustomText
                    msg={"- 디자인매니지먼트"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 신상품및신사업마케팅"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 사업계획과창업실무"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                  <CustomText
                    msg={"- 벤처창업론"}
                    fontType={"light"}
                    props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 62 }}>
        <BulletPoint text={"전공전망 및 진로"} color={"#00b0ec"} />
        <div className="visual-first-chart">
          <div>
            <div>
              <CustomText
                msg={"라이프스타일 디자인"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"공방 및 제작사"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 생활소품, 가구·조명, 인테리어 등"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"라이프 스타일을 선도하는 공방 및 제작사"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"전문회사"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 산업디자인, 환경디자인, 공공디자인 등"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"디자인 전문 회사"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"디자인관련회사"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 게임 및 캐릭터 개발, 광고 기획사, 3D"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"CAD, 멀티미디어 업체, 이벤트 업체 등"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
            </div>
          </div>
          <div>
            <div>
              <CustomText
                msg={"4차산업디자인"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"제조업체"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 전자제품, 자동차, 문구·오나구, 팬시제품,"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"조선·의료기·산업장비·플랜트 등 제조 및 산업 회사"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"전문회사"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 산업디자인, 환경디자인, 공공디자인 등"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"디자인 전문 회사"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"정부 및 공공기관"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 문화예술, 산업자원 관련 정부"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"부서 및 국책연구소, 정부 산하기관 등"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
            </div>
          </div>
          <div>
            <div>
              <CustomText
                msg={"디자인창업"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"창업"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 창의적인 아이디어로 디자인 상품을 개발,"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"생산, 유통할 수 있는 벤처기업의 창업"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"개발업체"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": APP기반의 제품-서비스 시스템을 개발"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"서비스하는 벤처기업"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"디자인관련회사"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 게임 및 캐릭터 개발, 광고 기획사, 3D"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"CAD, 멀티미디어 업체, 이벤트 업체 등"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 62 }}>
        <BulletPoint text={"전공 관련 자격"} color={"#00b0ec"} />
        <CustomText
          msg={
            "제품디자인기사 / 제품디자인산업기사 / 제품디자인기술사 / 가구설계제도사 / 제품응용모델링기능사 / 컴퓨터그래픽스운용기능사 / 전자캐드기능사 / 포장기사 / 포장산업기사 /"
          }
          fontType={"light"}
          props={{ style: { fontSize: 20, marginTop: 32 } }}
        />
        <CustomText
          msg={"포장기술사 / 컬러리스트기사 / 컬러리스트산업기사"}
          fontType={"light"}
          props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
        />
      </div>
    </div>
  );
}
