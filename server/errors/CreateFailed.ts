
class CreateFailed extends Error {
    status: Number;

    constructor(message: string | undefined,status: Number) {
        super(message)
        this.name=this.constructor.name;
        this.status = status
    }
}

export default CreateFailed;