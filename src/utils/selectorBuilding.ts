import dayjs from "dayjs";

export type Sum = {
  value: boolean;
};

export interface SumSelectors {
  _sum: Sum;
  where?: WhereSelectors;
}

export type Avg = {
  value: boolean;
};

export interface AvgSelectors {
  _avg: Avg;
  where?: WhereSelectors;
}

export interface QuerySelectors {
  isActive?: string;
  text?: string;
  state?: string;
  clientCNPJ?: string;
  gt?: number;
  lt?: number;
  month?: string;
}

export type TextSearch = {
  name: string;
};

export type Value = {
  gt?: number;
  lt?: number;
};

type IdNumber = {
  contains: string;
};

export interface WhereSelectors {
  isActive?: boolean | string;
  contains?: TextSearch;
  value?: Value;
  state?: string;
  clientCNPJ?: string;
  number?: IdNumber;
  date?: Date;
}

export function selectorBuilding(
  querySelectors: QuerySelectors
): WhereSelectors {
  // eslint-disable-next-line prefer-const
  let selector: WhereSelectors;

  if (querySelectors.state) {
    selector = { ...selector, state: querySelectors.state };
  }

  if (querySelectors.clientCNPJ) {
    selector = { ...selector, clientCNPJ: querySelectors.clientCNPJ };
  }

  if (querySelectors.isActive === "true") {
    selector = { ...selector, isActive: true };
  } else if (querySelectors.isActive === "false") {
    selector = { ...selector, isActive: false };
  }

  if (typeof querySelectors.gt === "string") {
    selector = {
      ...selector,
      value: { gt: parseFloat(querySelectors.gt) },
    };
  }

  if (typeof querySelectors.lt === "string") {
    selector = {
      ...selector,
      value: { ...selector.value, lt: parseFloat(querySelectors.lt) },
    };
  }

  if (querySelectors.text) {
    selector = {
      ...selector,
      number: { contains: querySelectors.text },
    };
  }

  return selector;
}
