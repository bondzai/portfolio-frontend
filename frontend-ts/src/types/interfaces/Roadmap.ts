export interface RoadmapTask {
    _id: string;
    description: string;
    sub_tasks: Record<string, string>;
    title: string;
    url: string;
    image: string;
    status: number;
    year: string;
}

export interface RoadmapTasks {
    data: RoadmapTask[];
    loading?: boolean;
}

export interface Column {
    title: string;
    icon: React.ReactNode;
}
