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
        public barDate: String,
        public barDateMin: String,
        public barDateMax: String,
        public barTimestamp: String,
        public barTimestampMin: String,
        public barTimestampMax: String
    ){

    }


}
