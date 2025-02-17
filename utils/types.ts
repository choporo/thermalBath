export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type PropertyCardProps = {
  image: string;
  id: string;
  name: string;
  address: string;
  fee: string;
  rating: string;
  parking: string
  baths: number, 
  openAirBaths: number, 
  sauna: number
};


export type NaverMap = naver.maps.Map;

type Lng = number
type Lat = number

export type Coordinates = [Lat, Lng];

export type PropertyDetailProps = {
  address: string
  fee:string
  feature: string
  parking: string
  hours: string
  amenity: string
  phone: string
  temperature: string
}

type Definition = {
  label: string
}

type Element = {
  label : string
}

type HowTo = {
  label : string
}

export type AdminProps = {
  id: string,
  name: string,
  category: string,
  }

export const ThermalDefinition: Definition[] = [
  {
    label: "지하로부터 솟아나는 25°C 이상의 온수이자 다음의 성분기준을 모두 갖춘 경우로서 음용 또는 목욕용으로 사용되어도 인체에 해롭지 아니한 것"
  },
  {
    label: "𝄪 질산성질소는 10mg/L 이하일 것"
  },
  {
    label: "𝄪 테트라클로로에틸렌은 0.01mg/L 이하일 것"
  },
  {
    label: "𝄪 트리클로로에틸렌은 0.03mg/L 이하일 것"
  },
  {
    label: "• 일본 : 지하로부터 솟아나는 온수, 수증기, 가스로서, 그 온도가 25℃ 이상이거나 온천법이 규정하는 물질(탄화수소, 라돈, 철분 이온, 메타규산, 유황, 리튬 이온 등 19가지)의 함유량이 1kg당 1,000mg 내지 물질 중 하나가 법에 규정된 농도 이상으로 함유되어 있으면 온천으로 규정"
  },
  {
    label: "• 한국은 온천수가 반드시 25℃를 넘어야 하지만 일본은 25℃이하라도 다른 조건이 부합하면 온천으로 인정하고 있어 온도에 있어서는 한국이 더 까다롭다."
  }
] 


export const WaterElement:Element[] =[
  {
    label: "물 1L 속에 존재하는 수소이온의 양과 산성, 알칼리성의 정도를 나타내는 수치로서 수소이온이 많을수록 pH지수는 낮아지며 알칼리성이 강할수록 물이 매우 미끄럽다."
  },
  {
    label: "• 0 ~ 3.0 미만 ⮕ 산성"
  },
  {
    label: "• 3.0 ~ 6.0 미만 ⮕ 약산성" 
  },
  {
    label: "• 6.0 ~ 7.5 미만 ⮕ 중성"
  },
  { 
    label: "• 7.5 ~ 8.5 미만 ⮕ 약알칼리성"
  },
  {
    label: "• 8.5 이상 ⮕ 알칼리성"
  },
  {
    label: "• 양이온(나트륨, 칼슘, 마그네슘, 칼륨), 음이온(염소, 황산, 탄산수소염, 탄산)을 meq/L로 환산한 후 양이온과 음이온 성분 각각을 100%로 비교하여 25%이상인 성분으로 형을 표시. 이 때 25% 이상인 성분이 두 개 이상일 경우 가장 높은 값의 성분을 앞에 높고 두 번째 성분은 괄호로 묶는다. 예)Na(Ca)-HCO3(SO4)형 "
  },
  {
    label: "• 염화물 : 총고용물의 양 1,000mg/L 이상이며, 형의 분류상 염화나트륨형인 경우"
  },
  {
    label: "• 탄산염 : 총고용물의 양 1,000mg/L 이상이며, 형의 분류상 탄산나트륨형인 경우"
  },
  {
    label: "• 황산염 : 총고용물의 양 1,000mg/L 이상이며 형의 분류상 황산나트륨형인 경우"
  },
  {
    label: "• 유황 : 총고용물량에 관계없이 황 성분함량이 0.1mg/L 이상 함유한 경우"
  },
  {
    label: "• 탄산 : 탄산가스 성분을 성분 250mg/L 이상 함유한 경우"
  },
  {
    label: "• 실리카 : 실리카 성분의 함량 40mg/L 이상 함유한 경우"
  },
  {
    label : "• 철 : 철 성분의 함량 10mg/L 이상 함유한 경우"
  },
  {
    label: "• 광천/미량성분에 의한 분류에 해당하지 않는 단순천(유리 탄산 및 고형 성분의 함유량이 1,000mg 이하)은 '온천'으로 표기"
  },
  {
    label: "｢행정안전부 '2021년 온천업무편람' 참조｣"
  },
  {
    label : "- 비화산성 온천으로 주로 해안에 많이 분포하며 광물질(미네랄)을 거의 함유하고 있지 않은 단순천이 대부분이다."
  },
  {
    label: "<조수연(2022.02),『한국과 일본의 온천 요법 비교』, p8~9 인용>"
  },
  {
    label: "｢온천이용 허가를 받은 온천에서만 사용 가능한 온천 인증 마크｣"
  }
]


export const HowToSpa: HowTo[] = [
  {
    label: "• 목욕을 하면 혈류량이 증가하므로 온천욕 15~30분 전 이온음료나 비타민을 먹거나 물을 많이 마셔 탈수를 예방한다."
  },
  {
    label: "• 탕에 들어가기 전 비누칠은 하지 않는 것이 좋다. 각질과 유분이 너무 많이 제거되면 온천수로 인한 피부트러블이 생길 수 있기 때문이다."
  },
  {
    label: "• 온천욕을 마친 후 온천수의 성분이 피부에 흡수될 수 있도록 수건으로 물기를 닦는 대신 자연스럽게 말리거나 피부를 톡톡 두드려 말린다."
  }
]