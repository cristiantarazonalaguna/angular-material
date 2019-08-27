export class BarGet{

    constructor(
        public barId: number,
        public barChar: string,
        public barVarchar: string,
        public barText: string,
        public barSmallint: number,
        public barInteger: number,
        public barBigint: bigint,
        public barReal: number,
        public barDouble: number,
        public barDecimal: number,
        public barBoolean: boolean,
        public barDate: Date,
        public barDateMin: String,
        public barDateMax: String,
        public barTimestamp: Date,
        public barTimestampMin: Date,
        public barTimestampMax: Date
    ){

    }


}
