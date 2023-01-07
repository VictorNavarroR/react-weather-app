interface dataset {
    label: string;
    data?: number[];
    backgroundColor: string[];
}

export interface BarData {
    labels?: string[],
    datasets: dataset[]
}