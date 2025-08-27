using MachineManagement.API.Models;

namespace MachineManagement.API.Services;

public class MachineService : IMachineService
{
    //banco de dados em memória
    private static readonly List<Machine> _machines = new List<Machine>();

    public Machine CreateMachine(Machine newMachine)
    {
        newMachine.Id = Guid.NewGuid();
        _machines.Add(newMachine);
        return newMachine;
    }

    public List<Machine> GetAllMachines(string? status)
    {
        if (!string.IsNullOrEmpty(status))
        {
            return _machines.Where(m => m.Status.Equals(status, StringComparison.OrdinalIgnoreCase)).ToList();
        }
        return _machines;
    }

    public Machine? GetMachineById(Guid id)
    {
        return _machines.FirstOrDefault(m => m.Id == id);
    }

    public void UpdateMachineTelemetry(Guid id, string location, string status)
    {
        var machineToUpdate = GetMachineById(id);
        if (machineToUpdate != null)
        {
            machineToUpdate.Location = location;
            machineToUpdate.Status = status;
        }
       
    }
}