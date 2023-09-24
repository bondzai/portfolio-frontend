export interface RoadmapTaskType {
    _id: string;
    description: string;
    sub_tasks: Record<string, string>;
    title: string;
    url: string;
    image: string;
    status: number;
    year: string;
}

export interface RoadmapTasksType {
    data: RoadmapTaskType[];
    loading?: boolean;
}

export interface RoadmapColumnType {
    title: string;
    icon: React.ReactElement;
}
