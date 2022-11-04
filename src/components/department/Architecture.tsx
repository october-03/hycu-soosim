import React from "react";
import BulletPoint from "../module/BulletPoint";
import CustomText from "../module/CustomText";

export default function Architecture() {
  return (
    <div style={{ padding: "75px 0" }}>
      <div>
        <BulletPoint text={"교육목표와 인재상"} color={"#84959e"} />
        <div style={{ marginTop: 30 }}>
          <CustomText
            msg="건축·공공디자인은 공간구조와 이용자의 행태를 이해하여 내부와 외부 공간을 통합적으로 기획하고 아름답게 디자인하는 전공입니다."
            fontType="light"
            props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
          />
          <CustomText
            msg="건축디자인, 실내디자인, 환경디자인, 공공디자인, 전시디자인, VMD 영역의 전문디자이너 실력배양을 목표로, 사이버대 최다 교과목제공 및 체계적 실기학습을 통해"
            fontType="light"
            props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
          />
          <CustomText
            msg="차세대 '경험기반 공간설계'의 혁신적 사고와 '기획력을 갖춘 공간 디자이너'를 길러냅니다."
            fontType="light"
            props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
          />
        </div>
      </div>
      <div style={{ marginTop: 62 }}>
        <BulletPoint text={"특화전공 및 학위연계"} color={"#84959e"} />
        <div className="architecture-chart">
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <CustomText
                msg={"건축디자인"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"Architectural Design"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
            <div>
              <CustomText
                msg={"건축의 기초부터 건축 조형, 디지털"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"실습까지 아름다운 건축 만들기의"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"'조형 능력'배양 교과목 제공"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"건축학개론, 건축디자인, 건축구법,"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"공간디자인프로그래밍, 공간디자인론,"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"디지털건축구조, 캐드실습 도시계획"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
            </div>
            <div>
              <CustomText
                msg={"학위명 : 건축디자인(디자인학사)"}
                fontType={"light"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
          </div>
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <CustomText
                msg={"실내디자인"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"Interior Design"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
            <div>
              <CustomText
                msg={"건축의 기초부터 건축 조형, 디지털 실습"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"까지 아름다운 건축 만들기의 '조형 능력'"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"배양 교과목 제공"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"실내디자인, 가구디자인스튜디오,"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"홈데코레이션, 공간디자인 프로그래밍,"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"공간디자인론, 공간연출과경험, 가상현실"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"스튜디오, 풍수지리와생활공간"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
            </div>
            <div>
              <CustomText
                msg={"학위명 : 실내디자인(디자인학사)"}
                fontType={"light"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
          </div>
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <CustomText
                msg={"환경·공공디자인"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"Public Design"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
            <div>
              <CustomText
                msg={"가로, 건축외부공간, 공원, 도시 등 환경"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"디자인과 도시공공디자인, 경관, 공공시설물"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"등의 '통합설계능력' 배양 교과목 제공"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"환경·공공디자인, 디자인조사방법, 공공"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"디자인, 도시계획, 공간디자인프로그래밍,"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"공간디자인론, 근현대공간디자인의 이해,"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"인포메이션디자인"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
            </div>
            <div>
              <CustomText
                msg={"학위명 : 환경·공공디자인(디자인학사)"}
                fontType={"light"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
          </div>
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <CustomText
                msg={"전시디자인·VMD"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"Exhibitional Design"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
            <div>
              <CustomText
                msg={"전시관, 체험관 등의 설계 및 상업공간"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"연출을 다루는 '연출능력'배양 교과목 제공"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"전시디자인·VMD, 전시기획의이해, 공간"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"열출과경험, 브랜드전략과디자인,"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"디자인과마케팅, 라이프스타일디자인,"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"가상현실 스튜디오, 공간디자인론"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
            </div>
            <div>
              <CustomText
                msg={"학위명 : 전시디자인·VMD(디자인학사)"}
                fontType={"light"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 62 }}>
        <BulletPoint text={"전공전망 및 진로"} color={"#84959e"} />
        <div className="architecture-chart">
          <div>
            <div>
              <CustomText
                msg={"건축디자인"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"디자인관련회사"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 건축사무소, 대형건설"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"회사 설계부문, 엔지니어링 사무소, 환경"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"디자인, 공공디자인 등 디자인 전문회사"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"시공관련회사"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 건축시공사, 건축자재회사,"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"건축분양사"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"기타"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 공간운영매니저, 건축관련 저널"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <CustomText
                msg={"실내디자인"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"디자인관련회사"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 실내디자인 전문회사,"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"상업인테리어 전문회사, 대형 건설회사"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"설계부문, 건축사무소"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"시공관련회사"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 아파트 인테리어, 실내건축"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"전문시공사, 가구시공사"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"가구전문회사"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 대형 리빙 및"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"가구디자인 판매사"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"기타"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 공간운영매니저, 실내디자인"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"관련 저널"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
            </div>
          </div>
          <div>
            <div>
              <CustomText
                msg={"실내디자인"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"디자인관련회사"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 공공디자인 전문회사,"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"경관디자인 전문회사, 환경디자인 전문회사,"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"엔지니어링사, 조경사무소"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"시공관련회사"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 가로·외부공간 전문 시공사,"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"조경시공사, 공공시설물 제작사,"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"보도포장재 회사"}
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
                  msg={": 245개 지자체 디자인"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"전문직공무원, 공공기관 및 연구소 공공"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"디자이너, 공공부문 디자인 재단"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
            </div>
          </div>
          <div>
            <div>
              <CustomText
                msg={"전시디자인·VMD"}
                fontType={"extraBold"}
                props={{ style: { fontSize: 20 } }}
              />
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"디자인관련회사"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 전시관, 박물관 기획"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"전문사, 3D연출디자인 전문사,"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg={"전시미디어 제작사"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"소품 제작사"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 디스플레이 소품, 공간 연출"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"소품 공방 및 전문제작사"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CustomText
                  msg={"개발관련회사"}
                  fontType={"bold"}
                  props={{
                    style: { fontSize: 20, lineHeight: 1.5, marginRight: 8 },
                  }}
                />
                <CustomText
                  msg={": 새로운 체험기반의"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"UX 시스템 개발사"}
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
                  msg={": 전시관, 박물관 전시"}
                  fontType={"light"}
                  props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
                />
              </div>
              <CustomText
                msg={"담당 큐레이터, 전시기획 전문직 공무원"}
                fontType={"light"}
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 62 }}>
        <BulletPoint text={"전공 관련 자격"} color={"#84959e"} />
        <CustomText
          msg={
            "건축기사 / 실내건축기사 / 공공디자이너(졸업후 문체부 등록) / 조경기사 / 제품디자인기술사 / 가구설계제도사 / 전산응용기계제도기능사 / 제품응용모델링기능사 /"
          }
          fontType={"light"}
          props={{ style: { fontSize: 20, marginTop: 32 } }}
        />
        <CustomText
          msg={"컴퓨터그래픽스운용기능사 / 전자캐드기능사 / 컬러리스트기사"}
          fontType={"light"}
          props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
        />
      </div>
    </div>
  );
}
