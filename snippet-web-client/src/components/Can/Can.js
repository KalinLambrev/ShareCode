import rules from '../../rules';

const check = (rules, role, action) => {
    const permissions = rules[role];
    if (!permissions) {
        return false;
    }

    const staticPermissions = permissions.static;

    if (staticPermissions && staticPermissions.includes(action)) {
        return true;
    }
    return false;
};

const Can = props =>
    check(rules, props.role, props.perform) ?
    props.yes() :
    props.no();

Can.defaultProps = {
    yes: () => null,
    no: () => null
};

export default Can;